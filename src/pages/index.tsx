import type { NextPage } from 'next';
import SingleCategory from 'src/components/Category';
import HorizontalGrid from 'src/components/Products';

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
      <HorizontalGrid items={product} />
      <SingleCategory
        details="What started as a true '80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing. "
        btn={{ name: 'SHOP NOW', link: '' }}
        image="/assets/images/home3.png"
        title="SUSTAINABLE DENIM"
        position="center"
      />
    </>
  );
};

export default Home;

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
