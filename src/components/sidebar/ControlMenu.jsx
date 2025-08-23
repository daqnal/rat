export default function ControlMenu({
  ActiveMenuComponent,
  component,
  ...props
}) {
  return (
    <div
      className={
        ActiveMenuComponent === component ? "control-menu-container" : ""
      }
    >
      {ActiveMenuComponent === component && ActiveMenuComponent && (
        <ActiveMenuComponent {...props} />
      )}
    </div>
  );
}
