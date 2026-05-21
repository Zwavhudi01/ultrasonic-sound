/**
 * Shared State & Inter-Tab Communication
 * Uses BroadcastChannel API for real-time cross-tab messaging
 * Falls back to localStorage for older browsers
 */

const CHANNEL_NAME = 'ultrasonic-positioning-system';

class SharedState {
    constructor() {
        this.channel = null;
        this.listeners = [];
        this.initChannel();
        this.initStorageListener();
    }

    initChannel() {
        if (typeof BroadcastChannel !== 'undefined') {
            this.channel = new BroadcastChannel(CHANNEL_NAME);
            this.channel.onmessage = (event) => {
                this.notifyListeners(event.data);
            };
        }
    }

    initStorageListener() {
        window.addEventListener('storage', (e) => {
            if (e.key === CHANNEL_NAME) {
                try {
                    const data = JSON.parse(e.newValue);
                    this.notifyListeners(data);
                } catch (err) {
                    console.error('Failed to parse storage data:', err);
                }
            }
        });
    }

    notifyListeners(data) {
        this.listeners.forEach(cb => {
            try {
                cb(data);
            } catch (err) {
                console.error('Listener error:', err);
            }
        });
    }

    subscribe(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(cb => cb !== callback);
        };
    }

    broadcast(data) {
        const payload = {
            ...data,
            timestamp: Date.now(),
            id: this.generateId()
        };

        if (this.channel) {
            this.channel.postMessage(payload);
        }

        try {
            localStorage.setItem(CHANNEL_NAME, JSON.stringify(payload));
            setTimeout(() => localStorage.removeItem(CHANNEL_NAME), 1000);
        } catch (e) {
            console.warn('localStorage fallback failed:', e);
        }

        this.notifyListeners(payload);
    }

    generateId() {
        return 'sig-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    getSignalHistory() {
        try {
            const stored = localStorage.getItem('signal_history');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    }

    addToHistory(signal) {
        const history = this.getSignalHistory();
        history.unshift({
            ...signal,
            receivedAt: new Date().toISOString()
        });
        if (history.length > 100) history.pop();
        localStorage.setItem('signal_history', JSON.stringify(history));
    }

    clearHistory() {
        localStorage.removeItem('signal_history');
    }
}

const sharedState = new SharedState();

const SIGNAL_TYPES = {
    PING: 'PING',
    PATTERN_MATCH: 'PATTERN_MATCH',
    ADMIN_UPDATE: 'ADMIN_UPDATE',
    DEVICE_STATUS: 'DEVICE_STATUS'
};

const TARGET_PATTERN = '12345';