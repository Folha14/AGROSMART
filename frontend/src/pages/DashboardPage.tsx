// frontend/src/pages/DashboardPage.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Recommendations from '../components/Recommendations';
import Notifications from '../components/Notifications';
import Weather from '../components/Weather';
import History from '../components/History';

const DashboardPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const history = useHistory();
    const username = "User"; // Replace with actual username from auth context or props
    const region = "Region"; // Replace with actual region from user data
    const country = "Country"; // Replace with actual country from user data

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigateToProfile = () => {
        history.push('/profile');
    };

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <header>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1>Bem-Vindo, {username}!</h1>
                            <p>Region: {region}, Country: {country}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button onClick={navigateToProfile} style={{ background: '#4fd1c5', color: '#222' }}>
                                Perfil
                            </button>
                            <button onClick={toggleSidebar}>
                                {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                            </button>
                        </div>
                    </div>
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