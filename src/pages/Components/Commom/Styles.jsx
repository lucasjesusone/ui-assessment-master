import styled, { css, keyframes } from "styled-components";

export const Button = styled.button`
  color: white;
  background: ${(props) =>
    props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;
  ${({ large }) =>
    large
      ? css`
          padding: 10px;
          font-size: 1.5em;
          border-radius: 6px;
        `
      : css`
          padding: 8px;
          font-size: 1em;
          border-radius: 4px;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  &:disabled {
    background: #eee;
    color: #666;
    cursor: progress;
  }
  cursor: pointer;
`;


export const LogoutButton = styled.button`
  color: #FFF;
  background: ${(props) =>
    props.secondary ? props.theme.primaryColor : props.theme.secondaryColor};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  border: none;
  width: 100%;
  height: 40px;
  display: block;
  border-radius: 4px;
  margin: 2rem;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;
