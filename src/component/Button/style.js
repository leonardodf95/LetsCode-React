import styled from "styled-components";

export const MessageButton = styled.button`
    background-color: #01c1c6;
    color: #231f3a;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    outline: none;
    font-size: 12px;
    font-weight: 600;
    margin: 10px 5px 0 0;
    opacity: 1;
    transition: 0.15s opacity ease;
  
    &:hover {
        opacity: 0.75;
    }
    
`
export const FollowButton = styled.button`
    background-color: #01c1c6;
    color: #231f3a;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    outline: none;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
    opacity: 1;
    transition: 0.15s opacity ease;

    &:hover {
        opacity: 0.75;
    }
    & svg {
        margin-right: 10px;
    }

    ${({follow}) => follow && `
        background: transparent;
        color: #01c1c6;
        border: 1px solid #01c1c6;
    `}  
`

export const StyledButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 12px;
  font-weight: 300;
  opacity: 1;
  padding: 0;
  transition: .15s opacity ease;
  &:hover {
    opacity: .75;
  }
  & svg {
    margin-right: 10px;
  }
  ${({ selected }) => selected && `
    border-radius: 5px;
    background: rgba(255,255,255,.2);
    font-weight: 800;
  `}
`