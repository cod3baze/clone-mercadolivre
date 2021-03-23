import React from "react";

import Header from "../../components/Header";
import Searchs from "../../components/Searchs";

import { Container, Wrapper } from "./styles";

const QuerySearch: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Searchs />
      </Wrapper>
    </Container>
  );
};

export default QuerySearch;
