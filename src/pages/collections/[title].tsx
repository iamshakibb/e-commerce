import Image from 'next/image';
import React, { useState } from 'react';
import { randomId } from 'src/constant/product-categorie';
import { url } from 'src/utils/helper/ImgUrlBuilder';
import { BiHeart } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Product = () => {
  const [image, setImage] = useState(url('product8_cj7sy7'));

  return (
    <section className="grid gap-10 mt-16 md:mt-24 md:container gird-cols-1 md:grid-cols-2 xl:grid-cols-[500px_1fr] xl:gap-36">
      <div className="image-container !relative h-[100vh] md:h-[80vh] lg:h-[100vh]">
        <Image src={image} alt="procucts" layout="fill" />
      </div>
      <ProductInfo setImage={setImage} />
    </section>
  );
};

export default Product;

const ProductInfo = ({
  setImage,
}: {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleVariant = (url: string) => {
    setImage(url);
  };
  return (
    <div className="container text-sm font-normal uppercase text-[#8C8C8C] mt-8 space-y-4 md:!px-0">
      {/* title */}
      <h1 className="text-base font-bold text-black">CHALK SAINTS BOYFRIEND</h1>
      {/* price */}
      <p className="text-black">USD $300.00</p>
      {/* sold out */}
      {info.isSoldOut && <p>Sold Out</p>}
      {/* variant */}
      {info.variants && (
        <ProductVariants
          handleVariant={handleVariant}
          variants={info.variants}
        />
      )}
      {/* size */}
      {info.sizes && <ProductSizes sizes={info.sizes} />}
      {/* Add to cart */}
      <button className="flex items-center justify-between space-x-2 w-[190px] h-[50px] pl-4 !text-s uppercase font-bold text-white bg-black">
        <span>Add to cart</span>
        <span className="flex items-center justify-center h-full px-4 text-[20px] border-l">
          <BiHeart />
        </span>
      </button>
    </div>
  );
};

const ProductVariants = ({
  handleVariant,
  variants,
}: {
  handleVariant: (url: string) => void;
  variants: {
    id: string;
    image: string;
    color: string;
  }[];
}) => {
  return (
    <div className="space-y-2">
      <p>Variants</p>
      <div className="flex space-x-2">
        {variants.map((variant) => (
          <button
            onClick={() => handleVariant(variant.image)}
            className="w-10 h-10 outline-none focus:ring-2 ring-black ring-offset-1"
            key={variant.id}
            style={{
              backgroundColor: variant.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ProductSizes = ({ sizes }: { sizes: string[] }) => {
  const [selectedSize, SetSelectedSize] = useState(info.sizes[0]);

  const handleSize = (size: string) => {
    SetSelectedSize(size);
  };

  return (
    <div>
      <p>Sizes</p>
      <div className="flex space-x-4 ">
        {sizes.map((size, idx) => (
          <button
            className="relative p-4 text-center text-black uppercase "
            key={idx}
            onClick={() => handleSize(size)}
          >
            <span>{size}</span>
            {selectedSize === size && (
              <motion.div
                layoutId="underline"
                className="w-full absolute left-0 bottom-[9px] h-[2px] bg-black"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const info = {
  title: 'CHALK SAINTS BOYFRIEND',
  price: '300.00',
  isSoldOut: true,
  variants: [
    {
      id: randomId(),
      image: url('product8_cj7sy7'),
      color: '#000',
    },
    {
      id: randomId(),
      image: url('product9_rjixpz'),
      color: 'red',
    },
    {
      id: randomId(),
      image: url('product3_ejcvpu'),
      color: 'blue',
    },
  ],
  sizes: ['s', 'm', 'l', 'xl'],
};
