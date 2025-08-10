export default function SidebarButton() {
    return (
        <div id="sidebar">
            <div id="sidebar-toggle-button-container">
                <button onClick={() => handleToggleSidebar()} id="sidebar-toggle-button">
                    <span id="sidebar-label">&lt;</span>
                </button>
            </div>
            <div id="sidebar-menu">
                e
            </div>
        </div>
    )
}

function handleToggleSidebar() {
    console.log("wip");
}