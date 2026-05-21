# ultrasonic-sound
<<<<<<< HEAD
# Ultrasonic Positioning System

## Overview

The Ultrasonic Positioning System is a real-time indoor tracking and monitoring web application that simulates ultrasonic signal transmission between devices inside a room.

The system is built around three devices:

* **Device A — Transmitter**
  Continuously broadcasts ultrasonic signals (pings) inside the room.

* **Device B — Receiver**
  Detects ultrasonic signals from Device A, confirms receipt, captures its current location, and associates the signal with user information.

* **Device C — Logger / Monitoring Dashboard**
  Receives the detection event from Device B and logs:

  * user information
  * exact room location
  * signal strength
  * frequency used
  * timestamp
  * detection distance

This project demonstrates how ultrasonic indoor positioning systems can be used for:

* personnel tracking
* security monitoring
* access control
* smart building systems
* industrial safety
* hospital staff tracking
* warehouse operations

---

## Features

### Real-Time Signal Simulation

* Live ultrasonic wave propagation visualization
* Continuous signal broadcasting from Device A
* Signal detection by Device B
* Detection event forwarding to Device C

### Interactive Indoor Positioning

* Draggable devices inside the room
* Dynamic distance calculation
* Signal strength estimation
* Real-time positioning updates

### Monitoring Dashboard

* Live event logging
* Detection history
* Signal strength monitoring
* Frequency tracking
* Detection count statistics
* Total ping statistics

### User Association

Each Device B detection includes:

* User Name
* User ID
* User Role
* Device location
* Timestamp

This makes the system suitable for identity-based indoor tracking.

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Canvas API

### Future Production Stack

Recommended for full deployment:

### Frontend

* React
* Next.js
* Tailwind CSS

### Backend

* Node.js
* Express.js
* PostgreSQL / Firebase

### Real-Time Communication

* Socket.IO

### Mobile Device Detection

* React Native / Capacitor

### Ultrasonic Detection Engine

* Web Audio API
* FFT Frequency Analysis
* Native Microphone Access

---

## How It Works

## Step 1 — Device A Broadcasts

Device A continuously emits ultrasonic pulses at a configurable frequency (example: 40kHz).

The signal expands through the room using simulated wave propagation.

---

## Step 2 — Device B Detects

When Device B is within signal range:

* the signal is detected
* signal strength is calculated
* time-of-flight is estimated
* detection is confirmed

---

## Step 3 — User Data Is Captured

Device B associates the signal with:

* current user
* user ID
* role
* exact room coordinates

---

## Step 4 — Device C Logs the Event

Device C receives:

* user details
* exact location
* signal strength
* timestamp
* distance from transmitter

and stores the event in the monitoring dashboard.

---

## Controls

The system allows adjustment of:

### Signal Frequency

Controls ultrasonic transmission frequency.

### Broadcast Power

Controls transmission range and signal strength.

### Ping Interval

Controls how often Device A sends signals.

### Device Positioning

All devices can be dragged to simulate real room placement.

---

## Installation

### Clone the Project

```bash
git clone your-repository-url
cd ultrasonic-positioning-system
```

---

## Run the Project

Simply open:

```bash
index.html
```

in your browser.

No server setup is required for the simulation version.

---

## Future Improvements

Planned upgrades include:

* real ultrasonic detection using microphones
* Web Audio API integration
* mobile app listener system
* backend database integration
* live admin dashboard
* user authentication
* zone alerts
* entry/exit notifications
* triangulation using multiple transmitters
* enterprise reporting system
* exportable logs
* role-based access control

---

## Production Goal

This project is intended to evolve into a full production-grade indoor positioning platform for enterprise environments.

Target use cases include:

* offices
* hospitals
* warehouses
* security facilities
* campuses
* factories
* government buildings

---

## Author

Developed as an Ultrasonic Indoor Positioning and User Tracking System for real-time location monitoring and signal-based detection.

---

## License

This project is open for further development and production deployment.
=======
# 🔊 Ultrasonic Positioning System

A 3-stage web application simulating an ultrasonic signal transmission, pattern matching, and admin logging pipeline. Built with vanilla HTML, CSS, and JavaScript — no build tools or dependencies required.

---

## 📋 System Overview

| Stage | Page | Role | Device | Action |
|-------|------|------|--------|--------|
| **1** | `transmitter.html` | Transmitter | Device A | Broadcasts signals with configurable code |
| **2** | `receiver.html` | Receiver/Monitor | Device B | Listens, filters for pattern `12345`, forwards matches |
| **3** | `admin.html` | Admin Dashboard | Device C | Displays location + account info of matched receivers |

---

## 🚀 Quick Start

1. **Download all files** into the same folder:
>>>>>>> db4dd1e (3 page)
