import { useNavigate } from "react-router-dom"
import React from 'react'
import '../assets/Welcome.css';


const Welcome = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    return(
        <div className="welcome">
            <h1>Welcome to CRM</h1>
            <button onClick = {goBack}>Go Back</button>
        </div>
    )
}

export default Welcome;