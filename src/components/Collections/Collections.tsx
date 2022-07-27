import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { url } from 'src/utils/helper/ImgUrlBuilder';
import styled from 'styled-components';
import tw from 'twin.macro';

interface product {
  id: string;
  img: string;
  title: string;
  price: number;
  isSoldOut: boolean;
}

type props = {
  products: product[];
};

const Collections: React.FC<props> = ({ products }) => {
  return (
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
            <button className="absolute text-2xl text-white md:text-xl bottom-3 left-3 w-min h-min">
              <BiHeart />
            </button>
          </div>
          <Link href={`product/${product.title}`} passHref>
            <a className="space-y-1">
              <Heading>{product.title}</Heading>
              <p className="text-sm">
                USD $<span>{product.price}</span>
              </p>
              {product.isSoldOut && (
                <p className="text-[#8C8C8C] font-semibold uppercase">
                  Sold out
                </p>
              )}
            </a>
          </Link>
        </Item>
      ))}
    </Grid>
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

const Heading = styled.h1`
  ${() => tw`mt-2 text-sm font-semibold`}
`;
