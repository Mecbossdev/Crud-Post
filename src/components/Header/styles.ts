import styled from "styled-components";


export const HeaderStyled = styled.header`
  background-color: #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;

  input {
    width: 100%;
    height: 3rem;
    border-radius: 10px;
    border: none;

    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`

export const InputStyled = styled.div`
  width: 500px;
`

export const DivPages = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  
  
  a{
    text-decoration: none;
    color: black;
  }
`