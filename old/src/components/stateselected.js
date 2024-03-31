import MenuBarButtonBase from "./menu-bar-button-base";
import DropdownList3 from "./dropdown-list3";
import "./stateselected.css";

const Stateselected = ({
  icTextBold,
  icTextAlignLeft,
  icTextAlignLeft1,
  icTextAlignLeft2,
  icTextAlignLeft3,
  showDropdown,
  showIcTextAlignLeftIcon,
  icTextAlignLeftIconVisibl,
  icTextAlignLeftIconVisibl1,
  icTextAlignLeftIconVisibl2,
}) => {
  return (
    <div className="stateselected1">
      <MenuBarButtonBase
        text="Normal text"
        icTextAlignLeft="/ic-textalignleft.svg"
        icChevronDown="/ic-chevrondown1.svg"
        colorPicker={false}
        dropdown
        icon={false}
        showText
        menuBarButtonBasePadding="0px var(--padding-9xs) 0px var(--padding-5xs)"
        menuBarButtonBaseBackgroundColor="#495057"
        textWidth="unset"
        textColor="#f8f9fa"
      />
      {showDropdown && (
        <div className="dropdown1">
          <DropdownList3
            icTextAlignLeft="/ic-textalignleft21.svg"
            listItem="Normal text"
            icTextAlignLeft1="/ic-textalignleft21.svg"
            listItem1="Heading 1"
            icTextAlignLeft2="/ic-textalignleft21.svg"
            listItem2="Heading 2"
            icTextAlignLeft3="/ic-textalignleft21.svg"
            listItem3="Heading 3"
            showIcTextAlignLeftIcon={false}
            icTextAlignLeftIconVisible={false}
            icTextAlignLeftIconVisible1={false}
            icTextAlignLeftIconVisible2={false}
            dropdownListAlignSelf="stretch"
            dropdownListFlex="unset"
            dropdownListItemAlignSelf="stretch"
            dropdownListItemBackgroundColor="#e7f5ff"
            listItemLineHeight="150%"
            dropdownListItemAlignSelf1="stretch"
            listItemFontSize="24px"
            listItemFontWeight="bold"
            dropdownListItemAlignSelf2="stretch"
            listItemFontSize1="18px"
            listItemFontWeight1="bold"
            dropdownListItemAlignSelf3="stretch"
            listItemFontWeight2="bold"
          />
        </div>
      )}
    </div>
  );
};

export default Stateselected;
