import React from 'react';
import SideBar from 'src/components/SideBar';
import { randomId } from 'src/constant/product-categorie';
import Collections from 'src/components/Collections';
import styled from 'styled-components';
import tw from 'twin.macro';

const CollectionsPage = () => {
  // const Heading = () => <h2>Hello asdfasdf</h2>;
  return (
    <Layout>
      <>
        <div>
          <SideBar />
        </div>
        <Collections products={products} />
      </>
    </Layout>
  );
};

export default CollectionsPage;

const products = [
  {
    id: randomId(),
    img: 'product7_jplueo',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: true,
  },
  {
    id: randomId(),
    img: 'product2_mabngc',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: false,
  },
  {
    id: randomId(),
    img: 'product6_pp3cfo',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: false,
  },
  {
    id: randomId(),
    img: 'product4_hcihjo',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: false,
  },
  {
    id: randomId(),
    img: 'product8_cj7sy7',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: true,
  },
  {
    id: randomId(),
    img: 'product5_tgrxeh',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: true,
  },
];

const Layout = styled.section`
  ${() => tw`grid container grid-cols-1 mt-[100px] lg:grid-cols-[200px 1fr] `}
`;
