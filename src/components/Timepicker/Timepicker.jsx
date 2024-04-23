import Select, { components } from "react-select";
import {
  TimePickerText,
  TimePickkerSvg,
  WrapperTest,
} from "./Timepicker.styled";
import Icons from "../../img/icons.svg";

const options = [];

const totalIntervals = (24 * 60) / 30;

for (let i = 0; i < totalIntervals; i++) {
  const hours = Math.floor((i * 30) / 60)
    .toString()
    .padStart(2, "0");
  const minutes = ((i * 30) % 60).toString().padStart(2, "0");
  const timeLabel = `${hours} : ${minutes}`;
  options.push({ value: timeLabel, label: timeLabel });
}

const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "16px 18px",
    borderRadius: "12px",
    borderColor: "rgba(17, 16, 28, 0.1)",
    backgroundColor: "#fbfbfb;",
    height: "100%",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "125%",
    outline: "none",
    boxShadow: "none",
    transition: "none",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid rgba(17, 16, 28, 0.1)",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    right: "0",
    width: "100%",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
    height: "100%",
    overflowY: "scroll",
  }),
  menu: (provided) => ({
    ...provided,
    right: "0",
    width: "70%",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,

    textAlign: "center",
    backgroundColor: isSelected ? "transparent" : "white",
    color: isSelected ? "#11101c" : "rgba(17, 16, 28, 0.3)",
    letterSpacing: "0.2em",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: " #11101c;",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: "0px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fbfbfb",
  }),
};

const CustomMenuList = (props) => {
  return (
    <WrapperTest>
      <TimePickerText>Meeting time</TimePickerText>
      <components.MenuList {...props} />
    </WrapperTest>
  );
};
const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <TimePickkerSvg>
        <use href={`${Icons}#icon-clock`} />
      </TimePickkerSvg>
    </components.DropdownIndicator>
  );
};

export const TimePicker = () => {
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      components={{
        MenuList: CustomMenuList,
        DropdownIndicator: CustomDropdownIndicator,
      }}
    />
  );
};
