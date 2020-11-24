import React, { Fragment, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ColorPicker = (props) => {
  const [color, setColor] = useState("");
  colorGlobal = color;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSuccess = (e) => {
    setColor("success");
  };
  const handleImportant = (e) => {
    setColor("warning");
  };
  const handleOverdue = (e) => {
    setColor("danger");
  };

  return (
    <Dropdown className="mx-2" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle outline color="primary" caret>
        Color
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handleSuccess}>Default</DropdownItem>
        <DropdownItem onClick={handleImportant}>Important</DropdownItem>
        <DropdownItem onClick={handleOverdue}>Overdue!</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ColorPicker;
