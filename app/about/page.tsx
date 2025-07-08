import { AboutAndBelief } from './components/about-belief';
import { DinnerTable } from './components/dinnerTable';
import { FeastInStyle } from './components/feast-in-style';
import { ImagesSlider } from './components/image-slider';
import { Timeline } from './components/timeline';

const Page = () => {
  return (
    <div className="bg-white">
      <AboutAndBelief />
      <DinnerTable />
      <Timeline />
      {/* <CuratedMenu /> test */}
      <ImagesSlider />
      <FeastInStyle />
    </div>
  );
};

export default Page;
