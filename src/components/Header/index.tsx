import React, { useState } from "react";

import {
  Container,
  Logo,
  Controller,
  SearchIcon,
  CardGroup,
  CardIcon,
} from "./styles";

interface Ielement {
  preventDefault: () => void;
}

const Header: React.FC = () => {
  const [querySearch, setQuerySearch] = useState("");

  function handleSubmit(event: Ielement) {
    event.preventDefault();

    window.location.href = `/search?query_search=${querySearch}`;
  }

  return (
    <Container>
      <Logo href="/">STORE_</Logo>

      <Controller>
        <form action="#">
          <input
            value={querySearch}
            onChange={(e) => setQuerySearch(e.target.value)}
            required
            type="search"
            id="search"
            name="search"
            placeholder="Busque por camisetas e muito mais"
          />

          <button type="submit" onClick={handleSubmit}>
            <SearchIcon />
          </button>
        </form>

        <div>
          <div id="separator"></div>

          <CardGroup href="/cart">
            <CardIcon />
          </CardGroup>
        </div>
      </Controller>
    </Container>
  );
};

export default Header;
