import React from "react";
// COMPONENTs
import Header from "../../components/Header";
import ProductGroup from "../../components/ProductGroup";
import Footer from "../../components/Footer";
// STATICs
import { Container, SliderGroup, Wrapper } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <SliderGroup>
        <h1>PRODUTOS DE QUALIDADE!</h1>
      </SliderGroup>

      <Wrapper>
        <ProductGroup category="Ofertas do dia" />
        <ProductGroup category="Inspirado nos seus favoritos" />
        <ProductGroup category="Baseada na sua última visita" />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Home;
