import type { NextPage } from 'next';
import SingleCategory from 'src/components/Category';
import CategoryGrid from 'src/components/Category/CategoryGrid';
import { ProductsWithoutTitle, ProductsTitle } from 'src/components/Products';
import styled from 'styled-components';
import tw from 'twin.macro';

const Home: NextPage = () => {
  return (
    <>
      <SingleCategory
        details="Our easiest chuck-on-and-go staples come with a serious style heritage that's liberating, sexy, comfy and supremely cool. "
        btn={{ name: 'SHOP NEW ARRIVALS', link: '' }}
        image="/assets/images/home1.jpg"
        title="NEW COLLECTION"
        position="end"
      />
      <SingleCategory
        details="Inspired by the '70s and 80's), we know that if you sift through our vintage inspired collection you're gonna rock the perfect silhouette. "
        btn={{ name: 'SHOP NOW', link: '' }}
        image="/assets/images/home2.png"
        title="VINTAGE INSPIRED"
        position="center"
      />
      <ProductsWithoutTitle items={product} />
      <SingleCategory
        details="What started as a true '80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing. "
        btn={{ name: 'SHOP NOW', link: '' }}
        image="/assets/images/home3.png"
        title="SUSTAINABLE DENIM"
        position="center"
      />
      <ProductsTitle items={product2} />
      <SingleCategory
        details="Beloved and forever relevant, there’s a convenience
        factor in a well-built pair of all-in-ones."
        btn={{ name: 'SHOP COLLECTION', link: '' }}
        image="/assets/images/home3.png"
        title="PRAY FOR ROCK"
        position="right"
      />
      <CategoryGrid items={product3} />
    </>
  );
};

export default Home;

const product3 = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product8.jpg',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product9.jpg',
  },

  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product10.jpg',
  },
  {
    id: 5,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product11.jpg',
  },
];

const product2 = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product4.jpg',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product5.jpg',
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product6.jpg',
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product7.jpg',
  },
];

const product = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product1.png',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: '/assets/images/product3.jpg',
  },
];

const Grid = styled.div`
  ${() => tw`grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 lg:gap-2`}

  & > .grid-item {
    ${() => tw`w-full h-full`}
    & > div:first-child {
      ${() => tw`relative h-[65em] md:h-[75em] lg:h-[18em]`}
    }
  }

  & > .grid-item:nth-child(1) {
    ${() => tw`lg:row-[1/3] lg:col-[1/3]`}
    & > div:first-child {
      ${() => tw`lg:h-full`}
    }
  }

  & > .grid-item:nth-child(2) {
    ${() => tw`lg:col-[3/4] lg:row-[1/2]`}
  }

  & > .grid-item:nth-child(3) {
    ${() => tw`lg:col-[4/-1] lg:row-[1/2]`}
  }
`;
