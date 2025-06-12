import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../services/api';

type Notification = {
    type: string;
    message: string;
    // Adicione outros campos se necessário
};

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        const getNotifications = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;
                const response = await fetchNotifications(token);
                setNotifications(response);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        getNotifications();
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>
                        <strong>{notification.type}:</strong> {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;