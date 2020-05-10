import styled from "styled-components"
export const Button = styled.button`
  display: flex;
  padding: 0 15px;
  margin-top: 10px;
  border-radius: 3px;
  transition: 150ms all ease-out;
  text-transform: uppercase;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
  letter-spacing: 0.06em;
  outline: 0;
  cursor: pointer;
  position: relative;
  justify-content: space-between;

  &:disabled {
    cursor: default;
  }
`
