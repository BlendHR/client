import MenuBarButtonBase from "./menu-bar-button-base";
import "./statedefault5.css";

const Statedefault5 = ({ icTextAlignLeft }) => {
  return (
    <div className="statedefault4">
      <MenuBarButtonBase
        text="Normal text"
        icTextAlignLeft="/ic-textalignleft.svg"
        icChevronDown="/ic-chevrondown.svg"
        colorPicker
        dropdown
        icon={false}
        showText={false}
        menuBarButtonBasePadding="0px var(--padding-9xs) 0px var(--padding-5xs)"
        menuBarButtonBaseBackgroundColor="unset"
        textWidth="79px"
        textColor="#212529"
      />
    </div>
  );
};

export default Statedefault5;
