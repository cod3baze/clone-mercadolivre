import React from "react";
// COMPONENTs
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
// STATICs
import { Container, Wrapper } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Home;
