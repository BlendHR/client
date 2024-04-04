import Property1Default4 from "./property1-default4";
import Property1Default5 from "./property1-default5";
import "./candidate-filter-container.css";

const CandidateFilterContainer = () => {
  return (
    <div className="frame-parent37">
      <div className="vector-container">
        <img className="vector-icon148" alt="" src="/vector161.svg" />
        <div className="filter">Filter</div>
      </div>
      <Property1Default4
        chevron="/chevron2.svg"
        property1DefaultWidth="323px"
        property1DefaultHeight="259px"
        property1DefaultPosition="absolute"
        property1DefaultTop="208px"
        property1DefaultLeft="540px"
        listBoxTitleHeight="6.91%"
        listBoxTitleWidth="90.9%"
        listBoxTitleBottom="93.09%"
        listBoxMainHeight="20.77%"
        listBoxMainWidth="90.9%"
        listBoxMainBottom="69.54%"
        listBoxBGBorder="1px solid var(--text)"
        chevronIconHeight="8.36%"
        chevronIconWidth="3.58%"
        chevronIconTop="46.65%"
        chevronIconRight="7.83%"
        chevronIconBottom="44.98%"
        chevronIconLeft="88.59%"
        placeholderTextHeight="33.27%"
        placeholderTextWidth="65.74%"
        placeholderTextTop="33.27%"
        placeholderTextRight="28.54%"
        placeholderTextBottom="33.46%"
        placeholderTextLeft="5.72%"
        allFontSize="20px"
        dropdownListWidth="90.9%"
      />
      <Property1Default5
        chevron="/chevron1.svg"
        property1DefaultPosition="absolute"
        property1DefaultTop="205px"
        property1DefaultLeft="217px"
        listBoxBGBorder="1px solid var(--text)"
        allFontSize="20px"
      />
      <div className="all-candidates">All Candidates</div>
    </div>
  );
};

export default CandidateFilterContainer;
