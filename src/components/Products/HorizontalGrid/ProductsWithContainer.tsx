import Image from 'next/image';
import React from 'react';
import { productsWithoutContainerType } from './ProductsWithoutContainer';

interface Props {
  items: productsWithoutContainerType[];
}

const ProductsWithContainer: React.FC<Props> = ({ items }) => {
  return (
    <section className="container py-8">
      <div>
        <h4 className="text-[1.2em] leading-8">NEW ARRIVALS</h4>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 text-white lg:grid-cols-2">
        {items.map((p: productsWithoutContainerType) => (
          <div
            className="grid-item relative h-[30em] md:h-[45em] lg:h-[45em] group"
            key={p.id}
          >
            <div className="image-container">
              <Image
                src={p.image}
                alt={p.name}
                layout="responsive"
                width={'100%'}
                height={'100%'}
                objectFit="cover"
              />
              <div className="overlay" />
            </div>
            <div className="absolute top-0 z-30 flex flex-col items-center justify-end w-full h-full px-5 py-5 text-center">
              <h2 className="mb-3 text-sm lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:opacity-100">
                {p.name}
              </h2>
              <p className="mb-3 text-base lg:mb-24 lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:opacity-100">
                ${p.price}
              </p>
              <button className="button lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:transition-all duration-500 max-w-[150px] group-hover:lg:top-[90%]">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsWithContainer;
