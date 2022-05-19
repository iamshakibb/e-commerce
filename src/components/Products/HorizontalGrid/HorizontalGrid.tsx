import Image from 'next/image';
import React from 'react';
import { Button } from 'src/styles/Buttons';
import styled from 'styled-components';
import tw from 'twin.macro';

function HorizontalGrid() {
  return (
    <Grid>
      <div className="grid-item">
        <div className="image">
          <Image
            src="/assets/images/product1.png"
            layout="fill"
            alt=""
            objectFit="cover"
          />
          <Overlay />
        </div>
        <div className="details group">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>$200</p>
          <Button>Shop Now</Button>
        </div>
      </div>
      <div className="grid-item">
        <div className="image">
          <Image
            src="/assets/images/product2.jpg"
            layout="fill"
            alt=""
            objectFit="cover"
          />
          <Overlay />
        </div>
        <div className="details">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>$200</p>
          <Button>Shop Now</Button>
        </div>
      </div>
      <div className="grid-item">
        <div className="image">
          <Image
            src="/assets/images/product3.jpg"
            layout="fill"
            alt=""
            objectFit="cover"
          />
          <Overlay />
        </div>
        <div className="details">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>$200</p>
          <Button>Shop Now</Button>
        </div>
      </div>
    </Grid>
  );
}

export default HorizontalGrid;

const Grid = styled.section`
  ${() => tw`grid grid-cols-1 lg:grid-cols-3`}

  & > .grid-item {
    ${() => tw`relative h-[40em] md:h-[50em] lg:h-[50em]`}

    & > .details {
      ${() =>
        tw`absolute top-0 w-full h-full flex items-center justify-center p-8 text-white flex-col `}

      & > h1 {
        ${() => tw`text-4xl mb-4 text-center md:hidden group-hover:block`}
        font-size: clamp(2em, 6vw, 4em);
      }

      & > p {
        ${() => tw`text-3xl mb-4 text-center `}
      }
    }
  }
`;

const Overlay = styled.div`
  ${() => tw`absolute top-0 w-full h-full bg-black opacity-20 `}
`;
