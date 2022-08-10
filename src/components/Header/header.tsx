import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { BiShoppingBag, BiHeart } from 'react-icons/bi';
import { HiOutlineMenuAlt2, HiOutlinePlusSm } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import { useRouter } from 'next/router';
import { GlobalContext, globalContextType } from 'src/context/global';

export default function Header() {
  const router = useRouter();
  const isRootPath = router.pathname === '/';
  const isMediumDevice = useMediaQuery(`(min-width: 1024px)`);
  const [menuOpen, setMenuOpen] = useState(false);
  const navVariants = {
    hidden: {
      opacity: 0,
      top: '-100vh',
    },
    visible: { opacity: 1, top: 0 },
  };
  const { showCart } = useContext(GlobalContext) as globalContextType;

  useEffect(() => {
    if (!isMediumDevice) {
      setMenuOpen(false);
    }
  }, [isMediumDevice, router]);
  return (
    <AnimatePresence initial={false}>
      <motion.header
        className="fixed z-40 w-full lg:pt-2 lg:text-white"
        initial={{ opacity: 0, top: '-100vh' }}
        animate={{ opacity: 1, top: 0 }}
      >
        <div className="container font-Raleway uppercase grid grid-cols-[50px_auto_90px] md:grid-cols-[2fr_1fr_2fr] items-center">
          <motion.div
            className="absolute inset-0 flex items-center justify-center w-full h-screen bg-white lg:bg-transparent lg:relative lg:w-auto lg:h-auto lg:justify-start"
            initial={isMediumDevice ? `visible` : 'hidden'}
            animate={
              isMediumDevice ? `visible` : menuOpen ? 'visible' : 'hidden'
            }
            variants={navVariants}
          >
            <ul className="lg:flex">
              {leftNavOptions.map((option, idx) => (
                <li
                  key={`nav-list-${option.id}`}
                  className={`mb-5 text-lg lg:mb-0 lg:font-semibold lg:text-s ${
                    isRootPath && isMediumDevice ? 'text-white' : 'text-black'
                  } ${idx === 0 ? `lg:ml-0` : 'lg:ml-4'}`}
                >
                  <Link href={option.link}>
                    <a>{option.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="z-50 lg:hidden">
            {menuOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-base msm:text-base"
              >
                <HiOutlinePlusSm
                  className="rotate-[rotate(45deg)]"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-base msm:text-base"
              >
                <HiOutlineMenuAlt2 onClick={() => setMenuOpen(!menuOpen)} />
              </motion.div>
            )}
          </div>

          <div className="justify-self-center w-28 mt-1.5">
            <Link href={'/'}>
              <a>
                <div className="w-full h-full lg:hidden">
                  <Image
                    src="/assets/svg/logo/Logo_black.svg"
                    alt="ECOMMERCE"
                    width={'150px'}
                    height={'40px'}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(255, 255, 255)}
                  />
                </div>
                <div className="hidden w-full h-full lg:block">
                  <Image
                    src={
                      isRootPath
                        ? '/assets/svg/logo/Logo_white.svg'
                        : '/assets/svg/logo/Logo_black.svg'
                    }
                    alt="ECOMMERCE"
                    width={'150px'}
                    height={'40px'}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(255, 255, 255)}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div
            className={`z-50 flex justify-self-end text-base msm:text-base  space-x-2 ${
              isRootPath ? `text-white` : `text-black`
            }`}
          >
            {/* shpping cart */}
            <button onClick={showCart}>
              <BiShoppingBag />
            </button>

            {/* whishlist */}
            <BiHeart />
            {/* user */}
            <FiUser />
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

// image with color data
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number): string =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: any, g: any, b: any) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

//  left nav options
const leftNavOptions = [
  {
    id: 'left-nav-0',
    name: 'New Arrivals',
    link: '/',
  },
  // {
  //   id: 'left-nav-1',
  //   name: 'Shop',
  //   link: 'shop',
  // },
  {
    id: 'left-nav-2',
    name: 'Collections',
    link: '/collections',
  },
];

const rightNavOptions = [
  {
    id: 'right-nav-0',
    name: 'Sign In',
    isLink: true,
    link: 'signin',
  },
  {
    id: 'right-nav-1',
    name: 'BAG',
    isLink: false,
    // iconName: faShoppingBag,
  },
];
