import styled from "styled-components";


export const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 10px;
  margin: 100px auto;
    
`

export const DivText = styled.div`
  justify-content: center;
  background-color: #D9CBBF;
  border-radius: 5px;
`
export const DivPost = styled.div`
  display: flex;
  justify-content: space-around;
`

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #BFA380;
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  margin: auto;
  padding: 1rem;
  border-radius: 10px;

  h1, p {
    font-size: 10px;
  }
`