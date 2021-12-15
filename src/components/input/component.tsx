import { InputUnstyled, InputUnstyledOwnProps } from '@mui/base';
import { styled } from '@mui/system';
import { FC } from 'react';

const StyledInputElement = styled('input')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  background: transparent;
  border: 1px solid black;
  color: black;
  height: 4rem;
  width: 90%;
  font-size: 1.5rem;
  padding: 0 5%;


  &:focus{
    outline:none;
  }
`;



export interface InputCustom{
    ErrorComponent?:JSX.Element | null;
}

const Input:FC<InputCustom&InputUnstyledOwnProps>= ({ErrorComponent,...props}) =>{
    return( <>
        {ErrorComponent}
    <InputUnstyled components={{ Input:StyledInputElement}} {...props}></InputUnstyled>

        </>
    );
}

export default Input;