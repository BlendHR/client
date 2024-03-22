import MenuBarButtonBase from "./menu-bar-button-base";
import "./statedefault1.css";

const Statedefault1 = ({ icTextBold, icChevronDown }) => {
  return (
    <div className="statedefault">
      <MenuBarButtonBase
        text="text"
        icTextAlignLeft="/ic-textbold1.svg"
        icChevronDown="/ic-chevrondown2.svg"
        colorPicker={false}
        dropdown={false}
        icon
        showText={false}
        menuBarButtonBasePadding="0px var(--padding-9xs)"
        menuBarButtonBaseBackgroundColor="unset"
        textWidth="26px"
        textColor="#212529"
      />
    </div>
  );
};

export default Statedefault1;
