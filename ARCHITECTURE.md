# Architecture Overview

Vocal2Local is designed with simplicity and scalability in mind.

## High-Level Flow
1. User opens the app and grants location access
2. Nearby vendors are fetched within a limited radius
3. Vendors can mark themselves active or inactive
4. Active vendors are shown on the map in real time

## Components
- Frontend: Map-first user interface
- Backend: Real-time database for vendor presence
- Maps: Google Maps SDK
- Authentication: Phone number based login

The architecture prioritizes low friction usage and ease of adoption for small vendors.
