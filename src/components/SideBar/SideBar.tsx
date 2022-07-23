import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { categorie, filters } from 'src/constant/product-categorie';
import styled from 'styled-components';
import tw from 'twin.macro';
import Filter from '../Filter';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { useMediaQuery } from 'src/hooks/useMediaQuery';
import { MotionConfig } from 'framer-motion';
import ResizeableHeight from '../ResizeableHeight';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMediumDevice = useMediaQuery(`(min-width: 1024px)`);
  console.log(isMediumDevice);

  // console.log(isOpen);
  return (
    <MotionConfig transition={{ duration: 0.4 }}>
      <Wrapper>
        <ToggleBtn>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <span>{isOpen ? <FiMinus /> : <BsPlus />}</span>
            <span>REFINE ITEMS</span>
          </button>
        </ToggleBtn>
        <SideNav />
        <MobileSideNav isOpen={isOpen} />
      </Wrapper>
    </MotionConfig>
  );
};

export default SideBar;

//! temp soulation
const SideNav = () => {
  return (
    <div className="hidden lg:block">
      <Categorie>
        <h1>CATEGORIES</h1>
        <ul>
          {categorie.map((c) => (
            <li key={c.id}>
              <button>{c.name}</button>
            </li>
          ))}
        </ul>
      </Categorie>
      <FilterWrapper>
        <h2>Filter</h2>
        <ul>
          {filters.map((filter) => (
            <Filter key={filter.id} filter={filter} />
          ))}
        </ul>
      </FilterWrapper>
    </div>
  );
};

const MobileSideNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="lg:hidden">
      <ResizeableHeight isOpen={isOpen}>
        {isOpen && (
          <div>
            <Categorie>
              <h1>CATEGORIES</h1>
              <ul>
                {categorie.map((c) => (
                  <li key={c.id}>
                    <button>{c.name}</button>
                  </li>
                ))}
              </ul>
            </Categorie>
            <FilterWrapper>
              <h2>Filter</h2>
              <ul>
                {filters.map((filter) => (
                  <Filter key={filter.id} filter={filter} />
                ))}
              </ul>
            </FilterWrapper>
          </div>
        )}
      </ResizeableHeight>
    </div>
  );
};

const Wrapper = styled.div`
  ${() => tw`mb-10 border-b-2 border-dashed border-b-gray-500 lg:border-none`}
`;

const Categorie = styled.div`
  ${() => tw`mb-5`}
  h1 {
    ${() => tw`mb-3 text-base`}
  }

  ul {
    li {
      ${() => tw`mb-3 text-s`}
    }
  }
`;

const FilterWrapper = styled.div`
  h2 {
    ${() => tw`mb-3 text-sm text-[#8C8C8C]`}
  }
`;

const ToggleBtn = styled.div`
  ${() => tw`block lg:hidden `}

  button {
    ${() => tw`flex items-center justify-center mb-5 space-x-2`}//
  }
`;
