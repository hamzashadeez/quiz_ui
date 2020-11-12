import React from 'react'
import './SideMenu.css'
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

function SideMenu() {
    return (
        <div className='side'>
            <div className='menuCont'>
            <CloudQueueIcon />
            <PeopleIcon />
            <DoneAllIcon />
            <CastConnectedIcon />
            <DonutSmallIcon />
            <CheckCircleIcon />
            <ChatIcon />
            </div>
        </div>
    )
}

export default SideMenu
