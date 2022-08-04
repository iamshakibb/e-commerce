import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import { useWindowSize } from 'src/hooks/useWindowSize';

interface SingleCategoryType {
  details: string;
  btn: {
    name: string;
    link: string;
  };
  image: string;
  title: string;
  position: string;
  blurImage: string;
}

function SingleCategory({
  details,
  btn,
  image,
  blurImage,
  title,
  position,
}: SingleCategoryType) {
  const [contentHeight, setContentHeight] = useState(0);

  return (
    <section className="relative h-screen pb-8">
      {/* Content section */}
      <Content
        details={details}
        btn={btn}
        title={title}
        position={position}
        setContentHeight={setContentHeight}
      />
      {/* Image section */}
      <ImageSection
        image={image}
        blurImage={blurImage}
        contentHeight={contentHeight}
      />
    </section>
  );
}

export default SingleCategory;

interface contentProps extends Omit<SingleCategoryType, 'image' | 'blurImage'> {
  setContentHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Content = ({
  position,
  setContentHeight,
  details,
  title,
  btn,
}: contentProps) => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const isWindowsSizeChange = useWindowSize();

  useEffect(() => {
    if (wrapper.current) {
      setContentHeight(wrapper.current?.offsetHeight);
    }
  }, [isWindowsSizeChange, setContentHeight]);
  return (
    <div
      className={`container relative z-10 flex flex-col items-center justify-end h-full text-center lg:text-left lg:text-white lg:items-start ${
        position === 'end'
          ? 'lg:justify-end'
          : position === 'center'
          ? 'lg:justify-center'
          : position === 'right'
          ? 'lg:justify-start lg:pt-48 lg:items-end'
          : ''
      }`}
    >
      <div
        className={`w-full max-w-[500px] p-0 h-fit ${
          position === 'end' ? 'lg:mb-20' : ``
        }`}
        ref={wrapper}
      >
        <h1 className="heading">{title}</h1>
        <p>{details}</p>
        <Link href={`/${btn.link}`} passHref>
          <button className="button">{btn.name}</button>
        </Link>
      </div>
    </div>
  );
};

interface imageProps
  extends Omit<SingleCategoryType, 'title' | 'details' | 'btn' | 'position'> {
  contentHeight: number;
}

const ImageSection = ({ image, blurImage, contentHeight }: imageProps) => {
  const isMediumDevice = useMediaQuery(`(min-width: 728px)`);

  return (
    <div
      className={`absolute top-0 w-full lg:!h-screen lol`}
      style={{
        height: `calc((100vh - ${contentHeight}px) - ${
          isMediumDevice ? '5px' : '15px'
        })`,
      }}
    >
      <Image
        src={image}
        alt="Featured"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={blurImage}
      />
      <div aria-hidden className="overlay" />
    </div>
  );
};
