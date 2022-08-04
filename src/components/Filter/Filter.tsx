import { MotionConfig } from 'framer-motion';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import ResizeableHeight from '../ResizeableHeight';

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
    <MotionConfig transition={{ duration: 0.1 }}>
      <li className="mb-4">
        <button
          className="flex items-center justify-center mb-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="mr-3">
            {isOpen ? <FiMinus color="#000" /> : <BsPlus color="#000" />}
          </span>
          <span>{filter.name}</span>
        </button>

        <ResizeableHeight isOpen={isOpen}>
          {isOpen && filter.subMenus && (
            <ul className="ml-2 cursor-pointer">
              {filter.subMenus?.map((menu) => (
                <li key={menu.id} className="mb-3 ml-2">
                  <span className="mr-3">
                    <input type="checkbox" id={menu.name} />
                  </span>
                  <span>
                    <label htmlFor={menu.name}>{menu.name}</label>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </ResizeableHeight>
      </li>
    </MotionConfig>
  );
};

export default Filter;
