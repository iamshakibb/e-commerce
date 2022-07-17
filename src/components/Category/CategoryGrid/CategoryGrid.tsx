import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Overlay,
  productsWithoutContainerType,
} from 'src/components/Products/HorizontalGrid/ProductsWithoutContainer';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
  items: productsWithoutContainerType[];
}

const CategoryGrid: React.FC<Props> = ({ items }) => {
  return (
    <section className="container">
      <h2 className="py-4 text-base font-bold">SHOP</h2>
      <Grid>
        {items.map((p) => (
          <Link href={p.link} passHref key={p.id}>
            <Wrapper className="grid-item">
              <div>
                <Image
                  src={p.image}
                  layout="fill"
                  objectFit="cover"
                  alt={p.name}
                />
                <Overlay />
              </div>
              <div>
                <h1>{p.name}</h1>
                <p>$ {p.price}</p>
              </div>
            </Wrapper>
          </Link>
        ))}
      </Grid>
    </section>
  );
};

export default CategoryGrid;

const Grid = styled.div`
  ${() =>
    tw`grid grid-cols-1 overflow-hidden lg:grid-cols-4 lg:grid-rows-2 lg:gap-2 `}

  & > .grid-item {
    ${() => tw`flex items-center justify-center w-full h-full`}
    & > div:first-child {
      ${() => tw`relative h-[35em] md:h-[75em] lg:h-[18em] w-full`}
    }
  }

  & > .grid-item:nth-child(1) {
    ${() => tw`lg:row-[1/3] lg:col-[1/3]`}

    & > div:first-child {
      ${() => tw`w-full lg:h-full`}
    }
  }

  & > .grid-item:nth-child(3) {
    ${() => tw`lg:col-[4/-1] lg:row-[1/2]`}
  }
`;

const Wrapper = styled.div`
  ${() => tw`relative overflow-hidden cursor-pointer`}

  &:hover {
    div:nth-child(1) {
      ${() => tw`transition-all duration-500 scale-110`}
    }
  }

  & > div:nth-child(2) {
    ${() =>
      tw` absolute bottom-0 p-10 text-center text-white lg:hidden lg:col-[3/4] lg:row-[1/2] `}

    h1 {
      ${() => tw`mb-2 `}
      font-size: clamp(1.1em, 6vw, 1.5em);
      line-height: 25px;
    }
  }
`;
