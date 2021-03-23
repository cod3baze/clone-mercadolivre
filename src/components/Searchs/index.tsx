import React from "react";

import {
  Container,
  ProductELement,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
} from "./styles";
// STATICs
import camisetaWht from "../../assets/camiseta_wht.webp";
import camisetaBlack from "../../assets/camiseta_dividion.webp";
import colarSoldier from "../../assets/colar_soldier.webp";
import regataBlack from "../../assets/regata_black.webp";
import nobeMarrom from "../../assets/bone_marrom.webp";

const Searchs: React.FC = () => {
  return (
    <Container>
      <h1>Produtos combinados com a pesquisa:</h1>

      <ul>
        <ProductELement href="/product_info/camiseta-branca/98736546t7">
          <img src={camisetaWht} alt="camiseta branca" />
          <PriceCard>
            <PriceRow>
              <span className="symbol">R$</span>
              <span className="fraction">34</span>
              <span className="cents">99</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
          </PriceCard>
        </ProductELement>

        <ProductELement href="/product_info/camiseta-branca/98736546t7">
          <img src={camisetaBlack} alt="camiseta branca" />
          <PriceCard>
            <PriceRow>
              <span className="symbol">R$</span>
              <span className="fraction">34</span>
              <span className="cents">99</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
          </PriceCard>
        </ProductELement>

        <ProductELement href="/product_info/camiseta-branca/98736546t7">
          <img src={colarSoldier} alt="camiseta branca" />
          <PriceCard>
            <PriceRow>
              <span className="symbol">R$</span>
              <span className="fraction">34</span>
              <span className="cents">99</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
          </PriceCard>
        </ProductELement>

        <ProductELement href="/product_info/camiseta-branca/98736546t7">
          <img src={regataBlack} alt="camiseta branca" />
          <PriceCard>
            <PriceRow>
              <span className="symbol">R$</span>
              <span className="fraction">34</span>
              <span className="cents">99</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
          </PriceCard>
        </ProductELement>

        <ProductELement href="/product_info/camiseta-branca/98736546t7">
          <img src={nobeMarrom} alt="camiseta branca" />
          <PriceCard>
            <PriceRow>
              <span className="symbol">R$</span>
              <span className="fraction">34</span>
              <span className="cents">99</span>
            </PriceRow>

            <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
          </PriceCard>
        </ProductELement>
      </ul>
    </Container>
  );
};

export default Searchs;
