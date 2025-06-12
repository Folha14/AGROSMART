import React, { useEffect, useState } from 'react';
import { fetchRecommendations } from '../services/api';

const Recommendations: React.FC = () => {
    const [recommendations, setRecommendations] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRecommendations = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No authentication token found');
                    setLoading(false);
                    return;
                }
                const data = await fetchRecommendations(token);
                setRecommendations(data.notifications);
            } catch (err) {
                setError('Failed to fetch recommendations');
            } finally {
                setLoading(false);
            }
        };

        getRecommendations();
    }, []);

    if (loading) {
        return <div>Loading recommendations...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Irrigation Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>
                        <strong>{rec.type}:</strong> {rec.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;