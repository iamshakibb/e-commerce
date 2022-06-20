import React from 'react';
import styled from 'styled-components';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import tw from 'twin.macro';
import { useRouter } from 'next/router';

interface layoutType {
  children: JSX.Element;
}

export default function Layout({ children }: layoutType) {
  const router = useRouter();
  const isRootPath = router.pathname === '/';
  return (
    <>
      <Header />
      <Main isRootPath={isRootPath}>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main<{ isRootPath: boolean }>`
  ${({ isRootPath }) => (isRootPath ? '' : tw`mt-[45px]`)}
`;
