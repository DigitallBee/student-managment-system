import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Student Managment
          <br />
          System
        </h1>
      </Logo>
      <StyledLink activeClassName="active-link" exact to="/">Dashboard</StyledLink>
      <StyledLink activeClassName="active-link" to="/add-user">Add user</StyledLink>
      <StyledLink activeClassName="active-link" to="/settings">Settings</StyledLink>
      <StyledLink activeClassName="active-link" to="/logout">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
