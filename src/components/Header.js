import React, { useEffect } from 'react'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import { FaGlobeAfrica } from "react-icons/fa";

const Header = props => {
  const { loggedIn, setLoggedIn } = props;
  const { push }  = useHistory();

  const checkUserStatus = () => {
    if(localStorage.getItem("token")) {
      return([<Link key="account" to="/account">Account</Link>,<Link key="logout" to="/" onClick={() => handleLogout()}>Logout</Link>])
    }
    else {
      return([<Link key="login" to="/login">Login</Link>,<Link key="signup" to='/signup'>Signup</Link>])
  }}

  useEffect(() => {
    checkUserStatus()
  }, [loggedIn]) // eslint-disable-line

  const handleLogout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    push("/");
    checkUserStatus()
  }


  return (
    <>
      <StyledHeader>
        <div id="logo-container">
          <Link to='/' className='logo'><h2>Marketplace</h2></Link>
          <FaGlobeAfrica color="green" size="2.5rem" />
        </div>

        <StyledNav>
          <Link to='/browse'>Browse</Link>
          {checkUserStatus()}
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

.logo h2 {
  font-size: 36px;
  margin-right: 5px;
}

#logo-container {
  display: flex;
  align-items: center;
}

.logo {
  margin-left: 2%;
  font-family: 'Pacifico', cursive;
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