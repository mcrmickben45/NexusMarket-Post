import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; 

const UserDashboard = () => {
    const { user } = useContext(UserContext);

    
    const userActivities = [
        { id: 1, activity: "Ordered a new laptop" },
        { id: 2, activity: "Updated profile information" },
        
    ];

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome to Your Dashboard, {user.name}!</h1>
                    <h2>Your Activities</h2>
                    <ul>
                        {userActivities.map(activity => (
                            <li key={activity.id}>{activity.activity}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Please log in to view your dashboard.</p>
            )}
        </div>
    );
};

export default UserDashboard;
