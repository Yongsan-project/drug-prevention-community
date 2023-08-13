import useSearch from "@/hooks/useSearch";
import styled from "styled-components";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

const SearchBar = () => {
  const { searchKey, handleChange, handleSubmit } = useSearch();

  return (
    <StyledContainer>
      <Input
        value={searchKey}
        placeholder="검색어를 입력해주세요"
        onChangeHandler={handleChange}
      />
      <Button value="검색" onClickHandler={handleSubmit} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

export default SearchBar;
