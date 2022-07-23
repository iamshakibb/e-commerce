import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import SideBar from 'src/components/SideBar';
import { randomId } from 'src/constant/product-categorie';
import Image from 'next/image';
import { url } from 'src/utils/helper/ImgUrlBuilder';
// import { Modal } from 'zero-react-modal';

const Collections = () => {
  // const Heading = () => <h2>Hello asdfasdf</h2>;
  return (
    <Layout>
      <div>
        <SideBar />
      </div>
      <Grid>
        {products.map((product) => (
          <Item key={product.id}>
            <Image
              src={url(product.img)}
              alt={product.img}
              layout="responsive"
              width={'100%'}
              height={'100%'}
              objectFit="cover"
            />
          </Item>
        ))}
      </Grid>
    </Layout>
  );
};

export default Collections;

const Grid = styled.div`
  ${() => tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10`}
`;

const Item = styled.div`
  ${() => tw`relative h-[500px] sm:h-[600px] msm:h-[650px] lg:h-[600px] w-full`}

  span {
    ${() => tw`!h-full !w-full`}
  }
`;

const Layout = styled.section`
  ${() => tw`grid container grid-cols-1 mt-[100px] lg:grid-cols-[200px 1fr] `}
`;

// const SideNavBar = styled.div`
//   ${() => tw``}
// `;

const products = [
  {
    id: randomId(),
    img: 'product7_jplueo',
  },
  {
    id: randomId(),
    img: 'product2_mabngc',
  },
  {
    id: randomId(),
    img: 'product6_pp3cfo',
  },
  {
    id: randomId(),
    img: 'product4_hcihjo',
  },
  {
    id: randomId(),
    img: 'product8_cj7sy7',
  },
  {
    id: randomId(),
    img: 'product5_tgrxeh',
  },
];
