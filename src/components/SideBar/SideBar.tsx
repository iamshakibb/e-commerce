import Link from 'next/link';
import React from 'react';
import { categorie, filters } from 'src/constant/product-categorie';
import styled from 'styled-components';
import tw from 'twin.macro';
import Filter from '../Filter';

const SideBar = () => {
  return (
    <>
      <Categorie>
        <h1>CATEGORIES</h1>
        <ul>
          {categorie.map((c) => (
            <li key={c.id}>
              <Link href={c.link}>
                <a>{c.name}</a>
              </Link>
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
    </>
  );
};

export default SideBar;

const Categorie = styled.div`
  ${() => tw`mb-5`}
  h1 {
    ${() => tw`mb-3 text-[22px]`}
  }

  ul {
    li {
      ${() => tw`mb-3 text-[14px]`}
    }
  }
`;

const FilterWrapper = styled.div`
  h2 {
    ${() => tw`mb-3 text-[16px] text-[#8C8C8C]`}
  }
`;
