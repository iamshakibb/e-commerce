import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BiShoppingBag, BiHeart } from 'react-icons/bi';
import { HiOutlineMenuAlt2, HiOutlinePlusSm } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import { useRouter } from 'next/router';

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

  useEffect(() => {
    if (!isMediumDevice) {
      setMenuOpen(false);
    }
  }, [isMediumDevice, router]);
  return (
    <Wrapper
      as={motion.header}
      initial={{ opacity: 0, top: '-100vh' }}
      animate={{ opacity: 1, top: 0 }}
    >
      <Grid>
        <Nav
          as={motion.div}
          initial={isMediumDevice ? `visible` : 'hidden'}
          animate={isMediumDevice ? `visible` : menuOpen ? 'visible' : 'hidden'}
          variants={navVariants}
        >
          <ul>
            {leftNavOptions.map((option) => (
              <li
                key={`nav-list-${option.id}`}
                className={
                  isRootPath && isMediumDevice ? 'text-white' : 'text-black'
                }
              >
                <Link href={option.link}>
                  <a>{option.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
        <Menu>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <HiOutlinePlusSm
                className="times"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <HiOutlineMenuAlt2 onClick={() => setMenuOpen(!menuOpen)} />
            </motion.div>
          )}
        </Menu>

        <Logo>
          <Link href={'/'}>
            <a>
              <div className="mobile">
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
              <div className="desktop">
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
        </Logo>
        <MenuAction isRootPath={isRootPath}>
          <BiShoppingBag />
          <BiHeart />
          <FiUser />
        </MenuAction>
      </Grid>
    </Wrapper>
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
    link: 'new_arrivals',
  },
  {
    id: 'left-nav-1',
    name: 'Shop',
    link: 'shop',
  },
  {
    id: 'left-nav-2',
    name: 'Collections',
    link: 'collections',
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

const Wrapper = styled.header`
  ${() => tw`fixed z-40 w-full lg:pt-2 lg:text-white`}
`;

const Grid = styled.div`
  ${() =>
    tw`container font-Raleway uppercase grid grid-cols-[50px auto 90px]   md:grid-cols-[2fr 1fr 2fr] items-center`}

  svg {
    ${() => tw`text-base msm:text-base`}
  }
`;

const Menu = styled.div`
  ${() => tw`z-50 lg:hidden`}

  .times {
    transform: rotate(45deg);
  }
`;

const Logo = styled.div`
  ${() => tw`justify-self-center w-28 mt-1.5`}

  .mobile {
    ${() => tw`w-full h-full lg:hidden`}
  }

  .desktop {
    ${() => tw`hidden w-full h-full lg:block`}
  }
`;

const MenuAction = styled.div<{ isRootPath: boolean }>`
  ${() => tw`z-50 flex justify-self-end`}

  svg {
    ${({ isRootPath }) => (isRootPath ? tw`text-white` : tw`text-black`)}
    &:not(:first-child) {
      ${() => tw`ml-2`}
    }
  }
`;

const Nav = styled.nav`
  ${() =>
    tw`absolute inset-0 flex items-center justify-center w-full h-screen bg-white lg:bg-transparent lg:relative lg:w-auto lg:h-auto lg:justify-start`}

  ul {
    ${() => tw`lg:flex `}
    li {
      ${() => tw`mb-5 text-lg lg:mb-0 lg:ml-4 lg:font-semibold lg:text-s`}

      &:first-child {
        ${() => tw`lg:ml-0`}
      }
    }
  }
`;
