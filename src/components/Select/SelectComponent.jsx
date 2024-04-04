import Select from "react-select";
import { SelectTitle } from "./SelectComponent.styled";

const options = [
  { value: "a to z", label: "A to Z" },
  { value: "z to a", label: "Z to A" },
  { value: "less than 10$", label: "Less than 10$" },
  { value: "greater than 10$", label: "Greater than 10$" },
  { value: "popular", label: "Popular" },
  { value: "not popular", label: "Not popular" },
  { value: "show all", label: "Show all" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: " #f03f3b",
    width: "226px",
    marginBottom: "32px",
    borderRadius: "14px",
    padding: "14px 18px 14px 18px",
    fontSize: "18px",
    lineHeight: "111%",
    color: "#fbfbfb",
  }),
  menu: (provided) => ({
    ...provided,
    width: "226px",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "111%",
    color: "rgba(17, 16, 28, 0.3)",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? "transparent" : "white",
    color: isSelected ? "#11101c" : "rgba(17, 16, 28, 0.3)",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fbfbfb;",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: "0px",
  }),
};

export const SelectComponent = () => {
  return (
    <>
      <SelectTitle>Filters</SelectTitle>
      <Select
        options={options}
        styles={customStyles}
        defaultValue={options[0]}
      />
    </>
  );
};
