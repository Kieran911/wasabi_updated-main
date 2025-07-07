import { AboutAndBelief } from './components/about-belief';
import { CuratedMenu } from './components/curated-menu';
import { DinnerTable } from './components/dinnerTable';
import { FeastInStyle } from './components/feast-in-style';
import { ImagesSlider } from './components/image-slider';
import { Timeline } from './components/timeline';

const Page = () => {
  return (
    <>
      <AboutAndBelief />
      <DinnerTable />
      <Timeline />
      {/* <CuratedMenu /> test */}
      <ImagesSlider />
      <FeastInStyle />
    </>
  );
};

export default Page;
