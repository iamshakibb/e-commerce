import Image from 'next/image';
import React from 'react';
import { Button } from 'src/styles/Buttons';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Overlay,
  productsWithoutContainerType,
} from './ProductsWithoutContainer';

interface Props {
  items: productsWithoutContainerType[];
}

const ProductsWithContainer: React.FC<Props> = ({ items }) => {
  return (
    <section className="container py-8">
      <div>
        <h4 className="text-[1.2em] leading-8">NEW ARRIVALS</h4>
      </div>
      <Grid>
        {items.map((p: productsWithoutContainerType) => (
          <div className="grid-item" key={p.id}>
            <div className="image">
              <Image
                src={p.image}
                alt={p.name}
                layout="responsive"
                width={'100%'}
                height={'100%'}
                objectFit="cover"
              />
              <Overlay />
            </div>
            <div>
              <h2>{p.name}</h2>
              <p>${p.price}</p>
              <Button borderColor="#fff">Buy Now</Button>
            </div>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default ProductsWithContainer;

const Grid = styled.div`
  ${() => tw`grid grid-cols-1 mt-5 gap-5 text-white lg:grid-cols-4 lg:gap-0`}

  .grid-item {
    ${() => tw`relative h-[30em] md:h-[45em]`}

    & > div:first-child {
      ${() => tw`absolute w-full h-full z-0 `}

      span {
        ${() => tw`!w-full !h-full p-20`}
      }
    }
    & > div:last-child {
      ${() =>
        tw`absolute w-full h-full top-0 z-30 flex flex-col justify-end items-center py-5 px-5 text-center`}

      & > h2 {
        ${() =>
          tw`text-2xl mb-3 lg:opacity-0 lg:transition-opacity lg:duration-300`}
      }

      & > p {
        ${() =>
          tw`text-3xl mb-3 lg:mb-24 lg:opacity-0 lg:transition-opacity lg:duration-300`}
      }

      & > button {
        ${() =>
          tw`lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:transition-all duration-500 max-w-[150px]`}
      }

      &:hover {
        & > h2 {
          ${() => tw`opacity-100`}
        }

        & > p {
          ${() => tw`opacity-100`}
        }

        & > button {
          ${() => tw`lg:top-[90%]`}
        }
      }
    }
  }
`;
