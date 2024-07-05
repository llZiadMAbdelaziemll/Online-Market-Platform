import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    transform-origin: 0;
    color: var(--color-green-400);
    accent-color: var(--color-green-0);
    border: 1px solid #ddd;
    outline: 1px solid #ddd !important;
  }
  & input[type="checkbox"]:checked {
    color: var(--color-green-400);
    accent-color: var(--color-green-0);
    border: 1px solid #ddd;
    outline: 1px solid #ddd;
  }
  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
    border: 1px solid #ddd;
    outline: 1px solid #ddd;
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
