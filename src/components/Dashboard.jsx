import React from 'react'
import { useNavigate } from "react-router-dom"
import '../assets/Welcome.css';


const Dashboard = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    return(
        <div className="welcome">
            <h1>You have signed in to CRM</h1>
            <button onClick = {goBack}>Go Back</button>
        </div>
    )
}

export default Dashboard;