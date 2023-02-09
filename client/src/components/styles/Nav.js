import styled from "styled-components";

export const Nav = styled.div`
  background-color: rgb(229, 242, 245);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: fixed;
  z-index: 1000;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  right: 0;

  img {
    height: 15px;
    border-radius: 50%;
  }
`;