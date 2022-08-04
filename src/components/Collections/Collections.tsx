import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { url } from 'src/utils/helper/ImgUrlBuilder';

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
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      {products.map((product) => (
        <div key={product.id} className="relative w-full">
          <div className="relative image-container h-[500px] sm:h-[600px] msm:h-[650px] lg:h-[600px]">
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
          <Link href={`collections/${product.title}`} passHref>
            <a className="space-y-1">
              <h1 className="mt-2 text-sm font-semibold">{product.title}</h1>
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
        </div>
      ))}
    </div>
  );
};

export default Collections;
