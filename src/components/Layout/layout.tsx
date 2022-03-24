import React from 'react';
import Header from '../Header';

interface layoutType {
  children: JSX.Element;
}

export default function layout({ children }: layoutType) {
  return (
    <>
      <Header />
      {children}
      <div>shakib</div>
    </>
  );
}
