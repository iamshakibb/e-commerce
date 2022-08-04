import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { productsWithoutContainerType } from 'src/components/Products/HorizontalGrid/ProductsWithoutContainer';

interface Props {
  items: productsWithoutContainerType[];
}

const CategoryGrid: React.FC<Props> = ({ items }) => {
  return (
    <section className="container">
      <h2 className="py-4 text-base font-bold">SHOP</h2>
      <div className="grid grid-cols-1 gap-10 overflow-hidden lg:grid-cols-4 lg:grid-rows-2 lg:gap-2">
        {items.map((p, idx) => (
          <Link href={p.link} passHref key={p.id}>
            <div
              className={`flex items-center justify-center w-full h-full relative overflow-hidden cursor-pointer group ${
                idx === 0 ? `lg:row-[1/3] lg:col-[1/3]` : ``
              }`}
            >
              <div
                className={`relative w-full lg:group-hover:transition-all lg:group-hover:duration-500 lg:group-hover:scale-110 h-[35em] md:h-[45em]  ${
                  idx === 0 ? `w-full lg:h-full` : ` lg:h-[18em]`
                }`}
              >
                <Image
                  src={p.image}
                  layout="fill"
                  objectFit="cover"
                  alt={p.name}
                />
                <div className="overlay" />
              </div>
              <div className="absolute bottom-0 p-10 text-center text-white lg:hidden lg:col-[3/4] lg:row-[1/2]">
                <h1 className="mb-2 text-[clamp(1.1em, 6vw, 1.5em)] leading-[25px]">
                  {p.name}
                </h1>
                <p>$ {p.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
