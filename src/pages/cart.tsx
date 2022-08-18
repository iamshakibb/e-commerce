import Image from 'next/image';
import React from 'react';
import { randomId } from 'src/constant/product-categorie';
import { url } from 'src/utils/helper/ImgUrlBuilder';

const cart = () => {
  return (
    <section className="container w-full max-w-[700px] mt-32">
      <div className="flex items-center space-x-5 border-b-[3px] border-gray-300">
        <h1 className="text-xl font-bold">Cart</h1>
        <p className="font-semibold text-gray-500">2 items</p>
      </div>
      <div className="mt-5">
        {products.map((product) => (
          <div key={product.id} className="mb-5">
            {/* image */}
            <div className="w-full max-w-[300px] h-[350px] relative">
              <Image layout="fill" src={url(product.img)} alt={product.title} />
            </div>
            <div>
              <h1>{product.title}</h1>
              <p>USD ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default cart;

const products = [
  {
    id: randomId(),
    img: 'product7_jplueo',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: true,
  },
  {
    id: randomId(),
    img: 'product2_mabngc',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: false,
  },
];
