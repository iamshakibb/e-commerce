import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BiShoppingBag, BiHeart } from 'react-icons/bi';
import { HiOutlineMenuAlt2, HiOutlinePlusSm } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navVariants = {
    hidden: { opacity: 0, top: `-100vh` },
    visible: { opacity: 1, top: 0 },
  };

  return (
    <Wrapper>
      <Grid>
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
          <Image
            src="/assets/svg/logo/Logo_black.svg"
            alt="ECOMMERCE"
            width={'150px'}
            height={'40px'}
            quality={100}
            placeholder="blur"
            blurDataURL={rgbDataURL(255, 255, 255)}
          />
        </Logo>
        <MenuAction>
          <BiShoppingBag />
          <BiHeart />
          <FiUser />
        </MenuAction>
      </Grid>
      <Nav
        as={motion.div}
        initial="hidden"
        animate={menuOpen ? 'visible' : 'hidden'}
        variants={navVariants}
      >
        <ul>
          {leftNavOptions.map((option) => (
            <li key={`nav-list-${option.id}`}>{option.name}</li>
          ))}
        </ul>
      </Nav>
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
  ${() => tw`relative`}
`;

const Grid = styled.div`
  ${() =>
    tw`container font-Raleway uppercase grid grid-cols-[50px auto 90px] items-center`}

  svg {
    ${() => tw`text-[20px] lol:text-[25px]`}
  }
`;

const Menu = styled.div`
  ${() => tw`z-10`}

  .times {
    /* ${() => tw`transform rotate-45`} */
    transform: rotate(45deg);
  }
`;

const Logo = styled.div`
  ${() => tw`justify-self-center w-28 mt-1.5`}
`;

const MenuAction = styled.div`
  ${() => tw`justify-self-end flex`}

  svg {
    &:not(:first-child) {
      ${() => tw`ml-2`}
    }
  }
`;

const Nav = styled.nav`
  /* ul {
    ${() => tw`flex items-center`}

    li {
      ${() => tw`mr-10`}

      a {
        ${() => tw`text-[1.1rem] `}
      }
    }
  } */
  ${() =>
    tw`absolute w-full h-screen bg-white inset-0 flex items-center justify-center`}

  ul > li {
    ${() => tw`text-3xl mb-5`}
  }
`;
