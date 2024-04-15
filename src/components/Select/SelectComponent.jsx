import { useDispatch } from "react-redux";
import Select from "react-select";
import { SelectTitle } from "./SelectComponent.styled";
import { addFilter } from "../../redux/filter/filterSlice";
import { useState } from "react";
import { Container } from "../Container/Container";

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
  control: (provided, { isFocused }) => ({
    ...provided,
    marginBottom: "32px",
    padding: "14px 18px 14px 18px",
    width: "226px",
    border: isFocused && "none",
    borderRadius: "14px",
    backgroundColor: " #f03f3b",
    boxShadow: isFocused && "none",
    fontSize: "18px",
    lineHeight: "111%",
    color: "#fbfbfb",
  }),
  menu: (provided) => ({
    ...provided,
    width: "226px",
    borderRadius: "14px",
    background: "#fff",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
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
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fbfbfb",
  }),
};

export const SelectComponent = () => {
  const [activeOption, setActiveOption] = useState(options[0]);
  const dispatch = useDispatch();

  const handleSelectChange = (selectedOption) => {
    setActiveOption(selectedOption);
    dispatch(addFilter(selectedOption.value));
  };

  return (
    <Container>
      <SelectTitle>Filters</SelectTitle>
      <Select
        options={options}
        styles={customStyles}
        defaultValue={activeOption}
        onChange={handleSelectChange}
      />
    </Container>
  );
};
