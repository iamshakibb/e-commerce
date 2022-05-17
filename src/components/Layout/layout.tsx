import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../Header';

interface layoutType {
  children: JSX.Element;
}

export default function layout({ children }: layoutType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  /* ${() => tw`mt-[45px]`} */
`;
