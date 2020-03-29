import React from 'react';
import {Link} from 'react-router-dom'

function DashboardNav() {
    return(
        <nav className="navbar">
                    <ul>
                        <li><Link to="/Dashboard">All</Link></li>
                        <li><Link to="/Dashboard/manutd">Man Utd</Link></li>
                        <li><Link to="/Dashboard/liverpool">Liverpool</Link></li>
                        <li><Link to="/Dashboard/mancity">Man City</Link></li>
                        <li><Link to="/Dashboard/chelsea">Chelsea</Link></li>
                        <li><Link to="/Dashboard/arsenal">Arsenal</Link></li>
                        <li><Link to="/Dashboard/other">Other</Link></li>
                    </ul>
                </nav>       
    )
}

export default DashboardNav;