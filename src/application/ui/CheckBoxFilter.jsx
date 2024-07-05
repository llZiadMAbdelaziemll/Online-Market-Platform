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
const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 1.76rem;
    width: 1.76rem;
    transform-origin: 0;
    /* color: var(--color-green-400); */
    /* accent-color: var(--color-green-0); */
    accent-color: var(--color-green-700);

    /* border: 1px solid #ddd; */
  }
  & input[type="checkbox"]:checked {
    /* color: var(--color-green-400); */
    accent-color: var(--color-green-700);

    border: 1px solid #ddd !important;
    outline: 1px solid #ddd !important;
  }
  & input[type="checkbox"]:disabled {
    accent-color: #ddd !important;
    outline: 1px solid #ddd !important;
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.4rem;
    color: #7a7a7a;
    cursor: pointer;
    text-transform: capitalize;
  }
`;

function CheckBoxFilter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (value) => {
    const currentValues = searchParams.getAll(filterField);
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    // Create new search parameters
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(filterField);
    newValues.forEach((v) => newSearchParams.append(filterField, v));
    setSearchParams(newSearchParams);
  };

  return (
    <StyledFilter>
      {options?.map((option) => {
        return (
          <StyledCheckbox key={option.value}>
            <input
              type="checkbox"
              id={`${filterField}-${option.value}`}
              value={option.value}
              checked={searchParams.getAll(filterField).includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
            />
            <label htmlFor={`${filterField}-${option.value}`}>
              {option.label}
            </label>
          </StyledCheckbox>
        );
      })}
    </StyledFilter>
  );
}

export default CheckBoxFilter;
