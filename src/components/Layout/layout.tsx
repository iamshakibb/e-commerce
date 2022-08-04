import React from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
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
      <main className={isRootPath ? `` : `mt-[45px]`}>{children}</main>
      <Footer />
    </>
  );
}
