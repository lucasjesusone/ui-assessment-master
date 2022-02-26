import React, { useState, useContext } from "react";
import { LogoutButton } from "./../Commom/Styles";
import { AuthContext } from "./../../../contexts/auth";
import {
  LeftContainer,
  NavbaInnerContainer,
  NavbarContainer,
  NavbarExtendedContainer,
  NavBarLink,
  NavbarLinkContainer,
  NavBarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from "./styles";

export default function Nav() {
  const { logout } = useContext(AuthContext);
  const [extendNavbar, setExtendNavbar] = useState();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbaInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavBarLink to="/notes">Notes</NavBarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((current) => !current);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <LogoutButton type="submit" onClick={handleLogout}>
              Logout
            </LogoutButton>
          </RightContainer>
        </NavbaInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavBarLinkExtended to="/notes">Notes</NavBarLinkExtended>
            <LogoutButton type="submit" onClick={handleLogout}>
              Logout
            </LogoutButton>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
}
