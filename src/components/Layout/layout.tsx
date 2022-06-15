import React from 'react';
import styled from 'styled-components';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

interface layoutType {
  children: JSX.Element;
}

export default function layout({ children }: layoutType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main``;
