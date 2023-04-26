import React from 'react'
import { DivPages, HeaderStyled, InputStyled } from './styles'


export type HeaderProps = {
  children?: React.ReactNode;
}

const Header = ({children}: HeaderProps) => {

  
  return (
    <HeaderStyled>
      <h1>Logo</h1>
      <InputStyled>
        {children}        
      </InputStyled>


      <DivPages>
        <a href="/">Home</a>
        <a href="/">Favorite</a>
        <a href="/">Loja</a>     
      </DivPages>

    </HeaderStyled>
  )
}

export default Header