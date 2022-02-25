import React from "react";
import styled from "styled-components";

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export default function PageLayout({ children }) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}
