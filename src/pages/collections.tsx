import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import SideBar from 'src/components/SideBar';
// import { Modal } from 'zero-react-modal';

const Collections = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Heading = () => <h2>Hello asdfasdf</h2>;
  return (
    <Layout>
      <div className="lg:hidden block">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <span>{isOpen ? <FiMinus /> : <BsPlus />}</span>
          <span>REFINE ITEMS</span>
        </button>
      </div>
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)}>CLick me</button>
      {/* <Modal isOpen={isOpen} hide={setIsOpen}>
        <h1>hiaksjdkfjasd</h1>
      </Modal> */}
      <div className="content">content</div>
    </Layout>
  );
};

export default Collections;

const Layout = styled.section`
  ${() => tw`grid container grid-cols-1 lg:grid-cols-[250px 1fr] mt-[100px]`}
`;

// const SideNavBar = styled.div`
//   ${() => tw``}
// `;
