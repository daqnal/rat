import { useState } from 'react';
import FullscreenControl from './FullscreenControl';
import AudioControl from './AudioControl';
import SpeedControl from './SpeedControl';
import Info from './Info';
import BackgroundControl from './BackgroundControl';

export default function SidebarButton() {

    const [sidebarMoved, setSidebarMoved] = useState(false);

    const sidebarMenuItems = [
        {name: "audio", icon: "/icons/volume.svg", component: AudioControl},
        {name: "speed", icon: "/icons/gauge.svg", component: SpeedControl},
        {name: "bg", icon: "/icons/image.svg", component: BackgroundControl},
        {name: "full", icon: "/icons/maximize.svg", component: FullscreenControl},
        {name: "info", icon: "/icons/info.svg", component: Info}
    ];

    function handleToggleSidebar() {
        setSidebarMoved(!sidebarMoved);
    }

    return (
        <div 
            id="sidebar"
            style={{
                transform: sidebarMoved ? "translateX(0px)" : "translateX(140px)",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        >
            <div id="sidebar-toggle-button-container">
                <button 
                    onClick={() => handleToggleSidebar()} 
                    id="sidebar-toggle-button"
                >
                    <span id="sidebar-label">
                        <img 
                            style={{
                                transform: sidebarMoved ? "rotate(180deg)" : "none",
                                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                            alt="open icon"
                            width="24" 
                            height="24" 
                            src="/icons/chevron-left.svg"
                            color="white"
                       />
                    </span>
                </button>
            </div>
            <div id="sidebar-menu">
                {sidebarMenuItems.map(({name, icon, component}, index) => (
                    <div className="control-container">
                        <button className="control-button">
                            <img src={icon} alt={name} />
                            {name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}