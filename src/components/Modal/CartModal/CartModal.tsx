import Image from 'next/image';
import React, { useContext } from 'react';
import { VerticalModal } from 'src/components/Modal';
import { randomId } from 'src/constant/product-categorie';
import { GlobalContext, globalContextType } from 'src/context/global';
import { url } from 'src/utils/helper/ImgUrlBuilder';
import { IoIosResize } from 'react-icons/io';
import Link from 'next/link';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

const CartModal = () => {
  const { hideCart, isCartOpen } = useContext(
    GlobalContext
  ) as globalContextType;
  return (
    <>
      <VerticalModal title="Your Cart" hide={hideCart} isCartOpen={isCartOpen}>
        <div className="flex items-center justify-between px-3 mt-5">
          <h4 className="text-sm">Total: USD $595</h4>
          <Link href="/cart" aria-label="go to cart page">
            <a className="text-lg" title="Cart page">
              <IoIosResize />
            </a>
          </Link>
        </div>
        <div className="mt-5 space-y-8">
          {products.map((product) => (
            <div className="relative space-y-3" key={product.id}>
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
                <Image
                  alt={product.title}
                  layout="fill"
                  src={url(product.img)}
                />
              </div>
              <div className="px-3">
                <h1>{product.title}</h1>
                <div className="flex items-center">
                  <p className="mr-10">${product.price}</p>
                  <div className="flex items-center space-x-5">
                    <button>
                      <HiPlusSm />
                    </button>
                    <button>
                      <HiMinusSm />
                    </button>
                  </div>
                </div>

                <p>Quantity: {product.price}</p>
                <p>Size: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </VerticalModal>
    </>
  );
};

export default CartModal;

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
  {
    id: randomId(),
    img: 'product6_pp3cfo',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: false,
  },
  {
    id: randomId(),
    img: 'product4_hcihjo',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: false,
  },
  {
    id: randomId(),
    img: 'product8_cj7sy7',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: true,
  },
  {
    id: randomId(),
    img: 'product5_tgrxeh',
    title: 'Black Sport Fox Bralette',
    price: 99.0,
    isSoldOut: true,
  },
];
