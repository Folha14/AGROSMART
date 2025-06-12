# frontend/README.md

# AgroSmart Frontend

## Description

The AgroSmart frontend is a React application designed to provide users with a seamless interface for managing agricultural data. It connects to the AgroSmart backend to fetch weather data, recommendations, notifications, and historical data.

## Features

- **User Authentication:** Secure login functionality for users.
- **Dashboard:** Displays user information, including username, region, and country.
- **Sidebar Navigation:** Easy access to different sections of the application, including recommendations, notifications, weather, and history.
- **Recommendations:** Provides irrigation recommendations based on current weather data.
- **Notifications:** Displays user notifications retrieved from the backend.
- **Weather Information:** Shows current weather conditions.
- **Historical Data:** Access to historical weather data for analysis.

## Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file for the React application
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   ├── services/           # API and authentication services
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types/              # TypeScript types and interfaces
├── package.json             # npm configuration file
└── tsconfig.json            # TypeScript configuration file
```

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation Steps

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## API Integration

The frontend communicates with the backend API to fetch data. Ensure that the backend is running and accessible at [http://localhost:5000](http://localhost:5000) for the frontend to function correctly.

## Technologies Used

- React
- TypeScript
- Axios (for API calls)
- React Router (for routing)

## Team

- Guilherme Mota
- Diogo A.
- José Folha

## License

This project is for academic purposes only.