import React from "react";

import {
  Container,
  Logo,
  Controller,
  SearchIcon,
  UserGroup,
  UserIcon,
  CardGroup,
  CardIcon,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>NWoFicial</Logo>

      <Controller>
        <form action="#">
          <input
            required
            type="search"
            id="search"
            name="search"
            placeholder="Busque por camisetas e muito mais"
          />

          <button type="submit">
            <SearchIcon />
          </button>
        </form>

        <div>
          <UserGroup>
            <UserIcon />
          </UserGroup>

          <CardGroup>
            <CardIcon />
          </CardGroup>
        </div>
      </Controller>
    </Container>
  );
};

export default Header;
