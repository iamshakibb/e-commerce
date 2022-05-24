import type { NextPage } from 'next';
import Image from 'next/image';
import SingleCategory from 'src/components/Category';
import HorizontalGrid from 'src/components/Products';
import { Overlay } from 'src/components/Products/HorizontalGrid/HorizontalGrid';
import { Button } from 'src/styles/Buttons';
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
      <HorizontalGrid items={product} />
      <SingleCategory
        details="What started as a true '80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing. "
        btn={{ name: 'SHOP NOW', link: '' }}
        image="/assets/images/home3.png"
        title="SUSTAINABLE DENIM"
        position="center"
      />

      <section className="container py-8">
        <div>
          <h4 className="text-2xl">NEW ARRIVALS</h4>
        </div>
        <Grid>
          {product2.map((p) => (
            <div className="grid-item" key={p.id}>
              <div>
                <Image
                  src={p.image}
                  alt={p.name}
                  layout="fill"
                  objectFit="cover"
                />
                <Overlay />
              </div>
              <div>
                <h2>{p.name}</h2>
                <p>${p.price}</p>
                <Button borderColor="#fff">Buy Now</Button>
              </div>
            </div>
          ))}
        </Grid>
      </section>
    </>
  );
};

export default Home;

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
  ${() => tw`grid grid-cols-1 mt-5 gap-5 text-white lg:grid-cols-4 lg:gap-0`}

  .grid-item {
    ${() => tw`relative h-[30em]`}

    & > div:first-child {
      ${() => tw`relative w-full h-full z-0`}
    }
    & > div:last-child {
      ${() =>
        tw`absolute w-full h-full top-0 z-30 flex flex-col justify-end items-center py-5 px-5 text-center`}

      & > h2 {
        ${() =>
          tw`text-2xl mb-3 lg:opacity-0 lg:transition-opacity lg:duration-300`}
      }

      & > p {
        ${() =>
          tw`text-3xl mb-3 lg:mb-24 lg:opacity-0 lg:transition-opacity lg:duration-300`}
      }

      & > button {
        ${() =>
          tw`lg:absolute lg:top-2/4 lg:-translate-y-2/4 lg:transition-all duration-500`}
      }

      &:hover {
        & > h2 {
          ${() => tw`opacity-100`}
        }

        & > p {
          ${() => tw`opacity-100`}
        }

        & > button {
          ${() => tw`lg:top-[85%]`}
        }
      }
    }
  }
`;
