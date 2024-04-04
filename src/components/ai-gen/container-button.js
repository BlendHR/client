import ContainerButtonBase from "./container-button-base";
import "./container-button.css";

const ContainerButton = ({ iconId }) => {
  return (
    <div className="menu-bar-button">
      <ContainerButtonBase
        displayText="text"
        uniqueIdText="/ic-chevrondown.svg"
        colorPicker={false}
        dropdown={false}
        icon
        text={false}
      />
    </div>
  );
};

export default ContainerButton;
