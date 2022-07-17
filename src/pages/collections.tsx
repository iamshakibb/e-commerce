import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import SideBar from 'src/components/SideBar';
// import { Modal } from 'zero-react-modal';

const Collections = () => {
  const Heading = () => <h2>Hello asdfasdf</h2>;
  return (
    <Layout>
      <div>
        <SideBar />
      </div>
      <div>content</div>
    </Layout>
  );
};

export default Collections;

const Layout = styled.section`
  ${() => tw`grid container grid-cols-1 mt-[100px] lg:grid-cols-[250px 1fr] `}
`;

// const SideNavBar = styled.div`
//   ${() => tw``}
// `;
