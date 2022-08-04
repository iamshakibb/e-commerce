import React, { useState } from 'react';
import { categorie, filters } from 'src/constant/product-categorie';
import Filter from '../Filter';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { MotionConfig } from 'framer-motion';
import ResizeableHeight from '../ResizeableHeight';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionConfig transition={{ duration: 0.4 }}>
      <div className="mb-10 border-b-2 border-dashed border-b-gray-500 lg:border-none">
        <div className="block lg:hidden">
          <button
            className="flex items-center justify-center mb-5 space-x-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span>{isOpen ? <FiMinus /> : <BsPlus />}</span>
            <span>REFINE ITEMS</span>
          </button>
        </div>
        <SideNav />
        <MobileSideNav isOpen={isOpen} />
      </div>
    </MotionConfig>
  );
};

export default SideBar;

//! temp soulation
const SideNav = () => {
  return (
    <div className="hidden lg:block">
      <div className="mb-5">
        <h1 className="mb-3 text-sm font-semibold">CATEGORIES</h1>
        <ul>
          {categorie.map((c) => (
            <li key={c.id} className="mb-3 text-s">
              <button>{c.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-3 text-sm text-[#8C8C8C]">Filter</h2>
        <ul>
          {filters.map((filter) => (
            <Filter key={filter.id} filter={filter} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileSideNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="lg:hidden">
      <ResizeableHeight isOpen={isOpen}>
        {isOpen && (
          <div>
            <div className="mb-5">
              <h1 className="mb-3 text-sm font-semibold">CATEGORIES</h1>
              <ul>
                {categorie.map((c) => (
                  <li key={c.id} className="mb-3 text-s">
                    <button>{c.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm text-[#8C8C8C]">Filter</h2>
              <ul>
                {filters.map((filter) => (
                  <Filter key={filter.id} filter={filter} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </ResizeableHeight>
    </div>
  );
};
