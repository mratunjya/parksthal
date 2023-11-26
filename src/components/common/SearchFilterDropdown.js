import styled from "styled-components";
import randomstring from "randomstring";
import React, { useState } from "react";

import { FlexBox } from "./FlexBox";
import { PRIMARY_100, PRIMARY_500, SECONDARY_100, WHITE } from "@colors";

const StyledDropdownContent = styled(FlexBox)`
  ${FlexBox}:not([data-selected="true"]):hover {
    background-color: ${PRIMARY_100};
  }
`;

const StyledInput = styled.input`
  text-align: center;
`;

const SearchFilterDropdown = ({ data, selectedItem, setSelectedItem }) => {
  const [filter, setFilter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setFilter(item?.data);
    setIsDropdownOpen(false);
  };

  const filteredItems = data?.filter((item) =>
    item?.data?.toUpperCase().includes(filter?.toUpperCase())
  );

  return (
    <FlexBox direction="column" gap="1rem">
      <StyledInput
        type="text"
        value={filter}
        placeholder="Search.."
        onChange={handleFilter}
        onFocus={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <StyledDropdownContent
          width="100%"
          radius="1rem"
          overflow="auto"
          maxHeight="200px"
          direction="column"
          height="fit-content"
          shadow={`0 0 4px 1px ${SECONDARY_100}`}
        >
          {filteredItems?.map((item) => (
            <FlexBox
              onClick={() => handleItemClick(item)}
              padding="1rem"
              cursor="pointer"
              key={randomstring.generate(100)}
              textColor={selectedItem?.id === item?.id ? WHITE : ""}
              bgColor={selectedItem?.id === item?.id ? PRIMARY_500 : ""}
              data-selected={selectedItem?.id === item?.id ? "true" : "false"}
            >
              {item?.data}
            </FlexBox>
          ))}
        </StyledDropdownContent>
      )}
    </FlexBox>
  );
};

export default SearchFilterDropdown;
