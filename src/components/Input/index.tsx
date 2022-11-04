import { forwardRef } from 'react';
import styles from 'styled-components';

const Input = forwardRef((props: any, ref) => {
  return (
    <InputStyled className="inputGroup">
      <InputStyle
        name={props.name}
        key={props.key}
        type={props.type}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.title}
        defaultValue={props.value}
        ref={ref}
        step={props.step}
        max={props.max}
        {...props}
      />
      <span className={`inputGroup__helper ${props.helperClassName}`}>
        {props.helper}
      </span>
    </InputStyled>
  );
});

export default Input;

const InputStyled = styles.div`
  padding: 0.2rem 0;
  color: ${({ theme }) => theme.colorButtonCircle};
  display: flex;
  flex-direction: column;
  label {
   
    span {
      padding-left: 5px;
      padding-bottom: 10px;
    }
    select {
      -webkit-appearance: none;
      padding: 0.375rem 0.75rem;
      font-size: 0.9375rem;
      line-height: 1.6;
      outline-color: var(--light);
      color: var(--dark);
      background-color: var(--white);
      background-clip: padding-box;
      border-radius: 3px;
      border-color: var(--light);
      box-shadow: none;
      margin-top: 0.375rem;
      border-style: solid;
    }
    input {
      
    }
  }
  &__helper {
    margin-top: 5px;

    &.--danger {
      color: var(--danger);
    }
  }

`;

const InputStyle = styles.input`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  outline-color: ${({ theme }) => theme.border};
  color: var(--dark);
  background-color: var(--white);
  background-clip: padding-box;
  border-radius: 3px;
  border: ${({ theme }) => theme.border};
  box-shadow: none;
  margin-top: 0.375rem;
  border-style: solid;
  border-radius: 7px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: 'Selecciona un archivo';
    display: inline-block;
    color: var(--white);
    background: var(--secondary);
    border: 1px solid var(--light);
    border-radius: 3px;
    padding: 5px 5px;
    margin-right: 0.5rem;
    outline: none;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 10pt;
  }
  &:hover::before {
    cursor: pointer;
    background-color: var(--dark);
  }
`;
