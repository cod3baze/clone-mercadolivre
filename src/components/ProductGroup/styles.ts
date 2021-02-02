import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;

  > div {
    margin-bottom: 22px;
  }

  h1 {
    font-size: 26px;
    font-weight: 300;
    margin: 0 0 0 8px;
    color: #666;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
  }
`;

export const ProductELement = styled.a`
  width: 224px;
  height: 314px;
  position: relative;
  transition: box-shadow 0.2s ease-out;

  color: var(--color-black);
  background: var(--color-white);
  text-decoration: none;
  box-shadow: var(--panel-shadow);

  padding: 10px;

  > img {
    width: 100%;
  }

  & + a {
    margin-left: 10px;
  }

  &:hover,
  &:active {
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 1);
  }
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 28px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }
  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
`;
