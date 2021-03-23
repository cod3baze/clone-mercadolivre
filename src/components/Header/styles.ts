import styled from "styled-components";
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: var(--color-header-master-y);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const Logo = styled.a`
  font-weight: 600;
  font-size: 29px;
  max-width: 200px;
  padding: 6px 10px;
  text-decoration: none;
  color: var(--hilight-border);
`;

export const Controller = styled.div`
  width: 100%;
  margin-left: 30px;
  max-width: 900px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > form {
    display: flex;

    height: 40px;
    max-width: 500px;
    width: 100%;

    background: var(--color-white);
    border-radius: 2px;
    box-shadow: var(--panel-shadow);

    > input {
      height: 100%;
      width: 100%;
      padding: 3px 12px;
      font-size: 16px;
      font-weight: normal;
    }

    > button {
      padding: 12px;
      border-left: 2px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  > div {
    display: flex;

    > div#separator {
      width: 1px;
      height: 20px;
      margin: auto 3px;
      background: #2222;
      box-shadow: var(--panel-shadow);
    }
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  flex-shrink: 0;
  height: 16px;
  width: 16px;
`;

export const CardGroup = styled.a`
  width: 32px;
  height: 32px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-primary);
  transition: color 1s ease-in;

  &:hover {
    color: var(--color-header-master);
  }
`;

export const CardIcon = styled(FiShoppingCart)`
  flex-shrink: 0;
  height: 23px;
  width: 23px;
`;
