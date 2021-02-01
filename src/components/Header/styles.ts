import styled from "styled-components";
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const Logo = styled.div`
  font-weight: 600;
  font-size: 29px;
  max-width: 200px;
  padding: 6px 10px;
`;

export const Controller = styled.div`
  width: 100%;
  margin-left: 30px;
  max-width: 900px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    }
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  flex-shrink: 0;
  height: 16px;
  width: 16px;
`;

export const UserGroup = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled(HiOutlineUserCircle)`
  flex-shrink: 0;
  height: 26px;
  width: 26px;
`;

export const CardGroup = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardIcon = styled(FiShoppingCart)`
  flex-shrink: 0;
  height: 26px;
  width: 26px;
`;
