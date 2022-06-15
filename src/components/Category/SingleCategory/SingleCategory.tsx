import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'src/styles/Buttons';
import { Heading } from 'src/styles/Heading';
import styled from 'styled-components';
import tw from 'twin.macro';

interface SingleCategoryType {
  details: string;
  btn: {
    name: string;
    link: string;
  };
  image: string;
  title: string;
  position: string;
}

function SingleCategory({
  details,
  btn,
  image,
  title,
  position,
}: SingleCategoryType) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (wrapper.current) {
      setContentHeight(wrapper.current?.offsetHeight);
    }
  }, []);
  return (
    <Wrapper contentHeight={contentHeight} position={position}>
      <div>
        <div className="w-full h-fit p-0" ref={wrapper}>
          <Heading>{title}</Heading>
          <p>{details}</p>
          <Link href={`/${btn.link}`} passHref>
            <Button twoColor>{btn.name}</Button>
          </Link>
        </div>
      </div>
      <div>
        <Image src={image} alt="Featured" layout="fill" objectFit="cover" />
        <Overlay aria-hidden />
      </div>
    </Wrapper>
  );
}

export default SingleCategory;

const Wrapper = styled.section<{ contentHeight: number; position: string }>`
  ${() => tw`relative h-screen pb-8`}

  & > div:first-child {
    ${() =>
      tw`container h-full relative z-10 flex flex-col justify-end items-center text-center lg:text-left lg:text-white lg:items-start`}
    ${({ position }) =>
      position === 'end'
        ? tw`lg:justify-end`
        : position === 'center'
        ? tw`lg:justify-center`
        : position === 'right'
        ? tw`lg:justify-start lg:pt-48 lg:items-end`
        : ''};

    div {
      ${() => tw`max-w-[500px] w-full`}
      ${({ position }) => (position === 'end' ? tw`lg:mb-20` : ``)}
    }
  }

  & > div:last-child {
    height: ${({ contentHeight }) =>
      contentHeight ? `calc(100vh - ${contentHeight}px - 5px) ` : `100vh`};
    ${() => tw`absolute w-full top-0`};

    @media (min-width: 992px) {
      height: 100vh;
    }
  }
`;

const Overlay = styled.div`
  ${() => tw`w-full h-full bg-black relative opacity-20`}
`;
