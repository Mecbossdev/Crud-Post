import styled from "styled-components";



export const DivInput = styled.div`
  
  background-color: #D9CBBF;
  border-radius: 5px;

    input{
      background-color: transparent;
      border: none;
      width: 100%;
      height: 100%;
      font-size: 10px;

      &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
    }
`