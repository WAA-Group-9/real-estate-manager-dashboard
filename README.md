# Real Estate Manager Dashboard

This project is a real estate manager dashboard built using JavaScript, npm, and React. It provides a user interface for managing properties and notifications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine. You can download Node.js and npm from [here](https://nodejs.org/en/download/)
- A modern web browser (Chrome, Firefox, Safari, Edge).

### Installation

1. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/WAA-Group-9/real-estate-manager-dashboard.git
```

2. Navigate to the project directory:
```bash
cd real-estate-manager-dashboard
```

3. Install the project dependencies
```bash
npm install
```
4. To start the application, run the following command in the project directory:
```bash
npm start
```

4. Runs the app in the development mode.\  
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Routes

- `/login`: Login page
- `/`: Dashboard (protected route)
- `/properties`: Property listing
- `/users`: User listing
- `/properties/:id`: Property detail
- `/properties/add`: Add a new property
- `/users/:id`: User detail
- `/users/add`: Add a new user
- `/logout`: Logout
- `/properties/:id/offers`: Offer listing for a specific property
- `/faq`: FAQ page
