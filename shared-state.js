const CHANNEL_NAME =
    'ultrasonic-positioning-system';

const SIGNAL_TYPES = {
    PING: 'PING',
    PATTERN_MATCH: 'PATTERN_MATCH',
    ADMIN_UPDATE: 'ADMIN_UPDATE',
    DEVICE_STATUS: 'DEVICE_STATUS'
};

const TARGET_PATTERN = '12345';

class SharedState {

    constructor() {

        this.listeners = [];

        // BroadcastChannel

        if (
            typeof BroadcastChannel !==
            'undefined'
        ) {

            this.channel =
                new BroadcastChannel(
                    CHANNEL_NAME
                );

            this.channel.onmessage =
                (event) => {

                    this.notifyListeners(
                        event.data
                    );
                };
        }

        // localStorage fallback

        window.addEventListener(
            'storage',
            (e) => {

                if (
                    e.key === CHANNEL_NAME
                ) {

                    try {

                        const data =
                            JSON.parse(
                                e.newValue
                            );

                        this.notifyListeners(
                            data
                        );

                    } catch (err) {

                        console.error(err);
                    }
                }
            }
        );
    }

    notifyListeners(data) {

        this.listeners.forEach(cb => {

            try {

                cb(data);

            } catch (err) {

                console.error(err);
            }
        });
    }

    subscribe(callback) {

        this.listeners.push(callback);
    }

    broadcast(data) {

        const payload = {
            ...data,
            timestamp: Date.now()
        };

        // BroadcastChannel

        if (this.channel) {

            this.channel.postMessage(
                payload
            );
        }

        // localStorage fallback

        localStorage.setItem(
            CHANNEL_NAME,
            JSON.stringify(payload)
        );

        // Same-tab update

        this.notifyListeners(payload);
    }
}

const sharedState =
    new SharedState();