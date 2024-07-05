import { FaLongArrowAltRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: var(--border-radius-sm);

  gap: 0.6rem;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: #f7f7f8;
  font-size: 1.4rem;
  color: #2b2b2d;
  border: 1px solid #e9e9e9;
  border-radius: var(--border-radius-sm);
  font-weight: 600;

  transition: all 0.3s;

  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: var(--color-green-400);
    `}/* &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  } */
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const currentFilter = searchParams.get(filterField) || options.at(0).value;
  let currentFilter;
  if (filterField !== "category") {
    currentFilter = searchParams.get(filterField);
  } else {
    currentFilter = searchParams.get(filterField) || options.at(0).value;
  }

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          className={`${option.value === currentFilter ? "active" : ""}`}
          disabled={option.value === currentFilter}
        >
          {option.label} <FaLongArrowAltRight />
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
