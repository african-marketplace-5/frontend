import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <StyledHeader>
        <Link to='/' className='logo'><h2>Marketplace</h2></Link>

        <StyledNav>
          <Link to='/account'>Account</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signin'>join</Link>
        </StyledNav>
        
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
padding: 20px;
box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
0 2px 4px rgba(0, 0, 0, 0.25);
background-color: white;

display: flex;
align-items: center;
justify-content: space-between;

.logo {
  margin-left: 2%;
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  color: green;
  text-decoration: none;
}
`

const StyledNav = styled.nav`
margin-right: 2%;

a {
  padding: 6px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color:  #825d33;  
}
a:hover {
  color: orange;
}
`

export default Header;