import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #000;
  display: flex;
  flex-direction: column;

  
  @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;

  @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbaInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarLink = styled(Link)`
    color: #FFF;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavBarLinkExtended = styled(Link)`
    color: #FFF;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #F2F2F2;
    font-size: 45px;
    cursor: pointer;



    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;
