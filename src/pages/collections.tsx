import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Collections = () => {
  return (
    <Layout>
      <div className="side-navbar">side</div>
      <div className="content">content</div>
    </Layout>
  );
};

export default Collections;

const Layout = styled.section`
  ${() => tw`grid container grid-cols-[300px 1fr] mt-[100px]`}
`;
