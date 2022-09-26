import Image from 'next/image';
import React from 'react';
import { randomId } from 'src/constant/product-categorie';
import { url } from 'src/utils/helper/ImgUrlBuilder';
import * as Select from '@radix-ui/react-select';
import { HiChevronDown } from 'react-icons/hi';

const cart = () => {
  return (
    <section className="container w-full max-w-[700px] mt-32">
      <div className="flex items-center space-x-5 border-b-[3px] border-gray-300">
        <h1 className="text-xl font-bold">Cart</h1>
        <p className="font-semibold text-gray-500">2 items</p>
      </div>
      <div className="mt-5">
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-2 mb-5">
            {/* image */}
            <div className="w-full max-w-[300px] h-[350px] relative">
              <Image layout="fill" src={url(product.img)} alt={product.title} />
            </div>
            <div>
              <h1>{product.title}</h1>
              <p>USD ${product.price}</p>
              <SelectCom />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default cart;

const SelectCom = () => {
  return (
    <Select.Root defaultValue="apple">
      <Select.SelectTrigger
        aria-label="Color"
        className="relative inline-flex items-center justify-center h-8 px-4 space-x-2 font-bold bg-white"
      >
        <Select.SelectValue placeholder="Select a Color" />
        <span>
          <HiChevronDown />
        </span>
      </Select.SelectTrigger>
      <Select.SelectContent className="overflow-hidden bg-white rounded-md shadow-sm">
        <Select.SelectViewport className="p-3">
          <Select.SelectGroup>
            <Select.SelectItem
              value="apple"
              className="relative flex items-center h-6 pl-6 pr-8 rounded bg-violet-600 [data-highlighted: FUCK] highlighted:bg-violet-600"
            >
              <Select.SelectItemText>Apple</Select.SelectItemText>
            </Select.SelectItem>
            <Select.SelectItem
              value="banana"
              className="relative flex items-center h-6 pl-6 pr-8 rounded bg-violet-600 "
            >
              <Select.SelectItemText>Banana</Select.SelectItemText>
            </Select.SelectItem>
            <Select.SelectItem
              value="blueberry"
              className="relative flex items-center h-6 pl-6 pr-8 rounded bg-violet-600"
            >
              <Select.SelectItemText>Blueberry</Select.SelectItemText>
            </Select.SelectItem>
          </Select.SelectGroup>
        </Select.SelectViewport>
      </Select.SelectContent>
    </Select.Root>
  );
};

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
