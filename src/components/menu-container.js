import Statedefault1 from "./statedefault1";
import Stateselected from "./stateselected";
import Statedefault4 from "./statedefault4";
import Statedefault5 from "./statedefault5";
import ContainerButton from "./container-button";
import "./menu-container.css";

const MenuContainer = ({
  showIcTextAlignLeftIcon,
  icTextAlignLeftIconVisibl,
  icTextAlignLeftIconVisibl1,
  icTextAlignLeftIconVisibl2,
}) => {
  return (
    <div className="menu-bar1">
      <div className="button-group-history1">
        <Statedefault1
          icTextBold="/ic-undo.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-redo.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
      </div>
      <Stateselected
        icTextBold="/ic-textbold.svg"
        icTextAlignLeft="/ic-textalignleft2.svg"
        icTextAlignLeft1="/ic-textalignleft2.svg"
        icTextAlignLeft2="/ic-textalignleft2.svg"
        icTextAlignLeft3="/ic-textalignleft2.svg"
        showDropdown={false}
      />
      <Statedefault4 />
      <Statedefault5 icTextAlignLeft="/ic-textalignleft1.svg" />
      <div className="button-group-history1">
        <Statedefault1
          icTextBold="/ic-textbold1.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-textitalic.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-textunderline.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-textstrikethrough.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-inlinecode.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-textclearformat.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
      </div>
      <div className="button-group-history1">
        <Statedefault1
          icTextBold="/ic-listbulleted.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-listnumbered.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
      </div>
      <div className="button-group-history1">
        <Statedefault1
          icTextBold="/ic-link.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-image.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-code.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <Statedefault1
          icTextBold="/ic-quotes.svg"
          icChevronDown="/ic-chevrondown.svg"
        />
        <ContainerButton iconId="/ic-chevrondown.svg" />
      </div>
    </div>
  );
};

export default MenuContainer;
