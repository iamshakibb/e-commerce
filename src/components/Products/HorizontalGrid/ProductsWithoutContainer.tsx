import Image from 'next/image';
import React from 'react';
import { Button } from 'src/styles/Buttons';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface productsWithoutContainerType {
  id: number;
  name: string;
  price: number;
  link: string;
  image: string;
}

interface Props {
  items: productsWithoutContainerType[];
}

const ProductsWithoutContainer: React.FC<Props> = ({ items }) => {
  return (
    <Grid>
      {items.map((i: productsWithoutContainerType) => (
        <GridItem key={i.id}>
          <ImgContainer>
            <Image
              src={i.image}
              layout="responsive"
              height={'100%'}
              width={'100%'}
              alt={i.name}
              objectFit="cover"
            />
            <Overlay aria-hidden />
          </ImgContainer>
          <Details>
            <h1>{i.name}</h1>
            <p>${i.price}</p>
            <Button>Shop Now</Button>
          </Details>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductsWithoutContainer;

const Grid = styled.section`
  ${() => tw`grid grid-cols-1 lg:grid-cols-3`}
`;

const GridItem = styled.div`
  ${() => tw`relative h-[90vh]  lg:h-[95vh] transition-all`}
`;

const ImgContainer = styled.div`
  ${() => tw`w-full h-full absolute`}

  span {
    ${() => tw`!w-full !h-full`}
  }
`;

const Details = styled.div`
  ${() =>
    tw`relative top-0 w-full h-full flex items-center justify-center p-8 text-white flex-col 
    lg:transition-all 
    // before
    lg:before:content-[""] lg:before:w-0 lg:before:h-32 lg:before:bg-black lg:before:opacity-80 lg:before:absolute before:top-0 lg:before:left-0 lg:before:duration-300
    // after
    lg:after:content-[""] lg:after:w-0 lg:after:h-32 lg:after:bg-black lg:after:opacity-80 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:duration-300
    `}

  & > h1 {
    ${() =>
      tw`text-2xl mb-4 text-center lg:opacity-0 lg:transition-opacity lg:duration-700`}
    font-size: clamp(1.8em, 6vw, 2em);
  }

  & > p {
    ${() =>
      tw`text-3xl mb-4 text-center lg:opacity-0 lg:transition-opacity lg:duration-300 delay-75`}
  }

  & > button {
    ${() => tw`lg:transition lg:transform lg:duration-500 lg:-translate-y-16`}
  }

  ${GridItem}:hover & {
    ${() => tw`lg:before:w-[50%] lg:after:w-[50%]`}

    & > h1 {
      ${() => tw`lg:opacity-100`}
    }

    & > p {
      ${() => tw`lg:opacity-100`}
    }

    & > button {
      ${() => tw`lg:translate-y-0`}
    }
  }
`;

export const Overlay = styled.div`
  ${() =>
    tw`absolute top-0 w-full h-full bg-gradient-to-b from-[rgba(0, 0, 0, 0.2)]  to-[rgba(0, 0, 0, 0.1)]`}
`;
