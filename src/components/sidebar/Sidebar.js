
import React, { useEffect, useState } from 'react'
import './Sidebar.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import HeadSetIcon from '@material-ui/icons/Headset'
import MicIcon from '@material-ui/icons/Mic'
import SettingsIcon from '@material-ui/icons/Settings'
import SidebarChannel from '../sidebarChannel/SidebarChannel'


const Sidebar = () => {

    return (
        <div className = "sidebar">
            <div className="sidebar__top">
                <h3>Username</h3>

                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <h4>Text Channels</h4>
                </div>

                <AddIcon className="sidebar__channelsList" />
            </div>

            <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>

            <div className = "sidebar__voice">  
                <SignalCellularAltIcon className = "sidebar__cellularVoiceIcon"fontSize = "large" />
                <div className = "sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className = "sidebar__voiceIcon">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className = 'sidebar__profile'>
                <Avatar className = "sidebar__profileAvatar" />
                <div className = "sidebar__profileInfo">
                    <h3>Username</h3>
                    <p>#id</p>
                </div>
                <div className = "sidebar__profileIcons">
                    <MicIcon />
                    <HeadSetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
