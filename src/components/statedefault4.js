import MenuBarButtonBase from "./menu-bar-button-base";
import "./statedefault4.css";

const Statedefault4 = () => {
  return (
    <div className="statedefault3">
      <MenuBarButtonBase
        text="Normal text"
        icTextAlignLeft="/ic-textalignleft1.svg"
        icChevronDown="/ic-chevrondown.svg"
        colorPicker={false}
        dropdown
        icon
        showText={false}
        menuBarButtonBasePadding="0px var(--padding-9xs) 0px var(--padding-5xs)"
        menuBarButtonBaseBackgroundColor="unset"
        textWidth="79px"
        textColor="#212529"
      />
    </div>
  );
};

export default Statedefault4;
