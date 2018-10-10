import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(360deg);}
`;
const spinleft = keyframes`
from {transform: rotate(360deg);}
to {transform: rotate(0deg);}
`;

export const Root = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  animation: ${p => (p.backwards ? spinleft : spin)} infinite 20s linear;
  height: 10vmin;
`;

export const Button = styled.button`
  background-color: white;
  font: inherit;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Person = styled.div`
  border: 2px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  width: 60%;
  margin: 16px auto;
  text-align: center;
`;

export const Input = styled.input`
  border-radius: 7px;
  padding: 9px 15px;
  margin: 8px 0;
  outline: none;
  border: 3px solid #ccc;
  transition: 0.5s;
  &:focus {
    background-color: lightyellow;
    border: 3px solid #555;
  }
`;
