import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import styled from 'styled-components';
import tw from 'twin.macro';

interface SubMenuType {
  name: string;
  id: string;
}

interface filterType {
  id: string;
  name: string;
  subMenus?: SubMenuType[];
}

type props = {
  filter: filterType;
};

const Filter: React.FC<props> = ({ filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <FilterBtn onClick={() => setIsOpen((prev) => !prev)}>
        <span>
          {isOpen ? <FiMinus color="#000" /> : <BsPlus color="#000" />}
        </span>
        <span>{filter.name}</span>
      </FilterBtn>

      {isOpen && filter.subMenus && (
        <SubMenu>
          {filter.subMenus?.map((menu) => (
            <li key={menu.id}>
              <span>
                <input type="checkbox" id={menu.name} />
              </span>
              <span>
                <label htmlFor={menu.name}>{menu.name}</label>
              </span>
            </li>
          ))}
        </SubMenu>
      )}
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.li`
  ${() => tw`mb-4`}
`;

const FilterBtn = styled.button`
  ${() => tw`flex items-center justify-center mb-2`}

  span:first-child {
    ${() => tw`mr-3`}
  }
`;

const SubMenu = styled.div`
  ${() => tw`ml-2 cursor-pointer`}

  li {
    ${() => tw`mb-3 ml-2 `}
  }
  span:first-child {
    ${() => tw`mr-3`}
  }
`;
