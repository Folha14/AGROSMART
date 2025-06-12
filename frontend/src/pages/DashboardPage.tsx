import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Recommendations from '../components/Recommendations';
import Notifications from '../components/Notifications';
import Weather from '../components/Weather';
import History from '../components/History';

const DashboardPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const username = "User"; // Replace with actual username from auth context or props
    const region = "Region"; // Replace with actual region from user data
    const country = "Country"; // Replace with actual country from user data

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <header>
                    <h1>Welcome, {username}</h1>
                    <p>Region: {region}, Country: {country}</p>
                    <button onClick={toggleSidebar}>
                        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                    </button>
                </header>
                <Recommendations />
                <Notifications />
                <Weather />
                <History />
            </div>
        </div>
    );
};

export default DashboardPage;