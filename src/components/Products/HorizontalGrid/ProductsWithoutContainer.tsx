import Image from 'next/image';
import React from 'react';

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
    <section className="grid grid-cols-1 gap-10 mb-10 lg:mb-0 lg:gap-0 lg:grid-cols-3">
      {items.map((i: productsWithoutContainerType) => (
        <div
          className="relative h-[90vh] md:h-[140vh] lg:h-[95vh] transition-all group"
          key={i.id}
        >
          <div className="image-container">
            <Image
              src={i.image}
              layout="responsive"
              height={'100%'}
              width={'100%'}
              alt={i.name}
              objectFit="cover"
            />
            <div className="overlay" aria-hidden />
          </div>
          <ContentWrapper>
            <h1 className="mb-4 text-base text-center lg:opacity-0 lg:transition-opacity lg:duration-700 text-[clamp(1.8em, 6vw, 2em)] group-hover:lg:opacity-100">
              {i.name}
            </h1>
            <p className="mb-4 text-xl text-center delay-75 lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:lg:opacity-100">
              ${i.price}
            </p>
            <button className="button lg:transition lg:transform lg:duration-500 lg:-translate-y-16 group-hover:lg:translate-y-0">
              Shop Now
            </button>
          </ContentWrapper>
        </div>
      ))}
    </section>
  );
};

export default ProductsWithoutContainer;

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='relative top-0 w-full h-full flex items-center justify-center p-8 text-white flex-col 
      lg:transition-all

      lg:before:content-[""] lg:before:w-0 lg:before:h-32 lg:before:bg-black lg:before:opacity-80 lg:before:absolute before:top-0 lg:before:left-0 lg:before:duration-300

      lg:after:content-[""] lg:after:w-0 lg:after:h-32 lg:after:bg-black lg:after:opacity-80 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:duration-300

      group-hover:lg:before:w-[50%] group-hover:lg:after:w-[50%]
      '
    >
      {children}
    </div>
  );
};
