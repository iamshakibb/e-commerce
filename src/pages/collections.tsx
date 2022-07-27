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
            <div className="relative h-[500px] sm:h-[600px] msm:h-[650px] lg:h-[600px]">
              <Image
                src={url(product.img)}
                alt={product.img}
                layout="responsive"
                width={'100%'}
                height={'100%'}
                objectFit="cover"
              />
            </div>
            <div>
              <Heading>{product.title}</Heading>
              <p className="text-sm">
                USD <span className="font-semibold">${product.price}</span>
              </p>
              {product.isSoldOut && (
                <p className="font-bold text-gray-500 uppercase">Sold out</p>
              )}
            </div>
          </Item>
        ))}
      </Grid>
    </Layout>
  );
};

export default Collections;

const Grid = styled.div`
  ${() => tw`grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2`}
`;

const Item = styled.div`
  ${() => tw`relative w-full`}

  span {
    ${() => tw`!h-full !w-full`}
  }
`;

const Layout = styled.section`
  ${() => tw`grid container grid-cols-1 mt-[100px] lg:grid-cols-[200px 1fr] `}
`;

const Heading = styled.h1`
  ${() => tw`mt-2 text-sm`}
`;

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
