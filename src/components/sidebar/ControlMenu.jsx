export default function ControlMenu({ ActiveMenuComponent, component }) {
    return (
        <div className={ActiveMenuComponent === component ? "control-menu-container" : ""}>
            {ActiveMenuComponent === component && ActiveMenuComponent && (<ActiveMenuComponent />)}
        </div>
    )
}