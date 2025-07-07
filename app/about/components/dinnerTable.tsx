import Image from 'next/image';
import image from '@/public/about/image 1793.png';

export const DinnerTable = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 z-20 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, black 0%, black 80%, white 80%, white 100%)`,
          }}
        />

        <div className="relative overflow-hidden inset-0 z-30 h-full w-[96%] m-auto">
          <div>
            <Image
              src={image}
              alt="about"
              width={1920}
              height={1080}
              className="h-full w-full object-cover absolute top-[10%] left-0 z-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};
