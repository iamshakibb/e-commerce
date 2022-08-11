import type { NextPage } from 'next';
import SingleCategory from 'src/components/Category';
import CategoryGrid from 'src/components/Category/CategoryGrid';
import {
  ProductsWithContainer,
  ProductsWithoutContainer,
} from 'src/components/Products';

import { url } from 'src/utils/helper/ImgUrlBuilder';

const Home: NextPage = () => {
  return (
    <>
      {/* single category product */}
      <SingleCategory
        details="Our easiest chuck-on-and-go staples come with a serious style heritage that's liberating, sexy, comfy and supremely cool. "
        btn={{ name: 'SHOP NEW ARRIVALS', link: '' }}
        image={url('home1_am5ox9')}
        blurImage={url('home1_am5ox9', true)}
        title="NEW COLLECTION"
        position="end"
      />
      {/* single category product */}
      <SingleCategory
        details="Inspired by the '70s and 80's), we know that if you sift through our vintage inspired collection you're gonna rock the perfect silhouette. "
        btn={{ name: 'SHOP NOW', link: '' }}
        image={url('home2_m9hbke')}
        blurImage={url('home2_m9hbke', true)}
        title="VINTAGE INSPIRED"
        position="center"
      />
      {/* boys section */}
      <ProductsWithoutContainer items={product} />
      <SingleCategory
        details="What started as a true '80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing. "
        btn={{ name: 'SHOP NOW', link: '' }}
        image={url('home3_zqlgqo')}
        blurImage={url('home3_zqlgqo', true)}
        title="SUSTAINABLE DENIM"
        position="center"
      />
      <ProductsWithContainer items={product2} />
      <SingleCategory
        details="Beloved and forever relevant, there’s a convenience
        factor in a well-built pair of all-in-ones."
        btn={{ name: 'SHOP COLLECTION', link: '' }}
        image={url('image-placeholder_kzayya')}
        blurImage={url('image-placeholder_kzayya', true)}
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
    image: url('product8_cj7sy7'),
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product9_rjixpz'),
  },

  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product3_ejcvpu'),
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product10_pdmfuz'),
  },
  {
    id: 5,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product11_gkicqh'),
  },
];

const product2 = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product4_hcihjo'),
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product5_tgrxeh'),
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product6_pp3cfo'),
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product7_jplueo'),
  },
];

const product = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product1_m3f6l8'),
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product2_mabngc'),
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet.',
    price: 200,
    link: '',
    image: url('product3_ejcvpu'),
  },
];
