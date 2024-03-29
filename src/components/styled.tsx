import styled from "styled-components";

export const GameUI = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(120, 83, 212, 0.772);
  justify-content: end;
  flex-direction: column;
  align-content: center;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  height: 20vh;
  background: white;
  border: 5px lightgray solid;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
`;
export const MenuItem = styled.div`
  background: white;
  border: 1px lightgray solid;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
`;

export const SubTitle = styled.h2`
  font-family: "FinkHeavyRegular";
`;

export const Text = styled.p`
  font-size: 1rem;
  text-align: left;
  line-height: 1.5rem;
`;
