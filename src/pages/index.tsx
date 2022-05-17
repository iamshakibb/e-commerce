import type { NextPage } from 'next';
import SingleCategory from 'src/components/Category';

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
    </>
  );
};

export default Home;
