import { Forum, Noto_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import bgImage from '@/public/about/feasttable.png';
import Logo from '@/public/about/Brown 1.png';
import phoneLogo from '@/public/about/Phone.png';
import envelopeLogo from '@/public/about/EnvelopeSimple.png';
import instagramLogo from '@/public/about/InstagramLogo.png';

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const FeastInStyle = () => {
  return (
    <div className="h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image
          src={bgImage}
          alt="Feast table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 bg-transparent h-full w-full flex items-center justify-center">
          <div className="w-[35%] min-w-[300px] aspect-square m-auto flex flex-col items-center justify-center gap-5">
            <h3
              className={twMerge(
                'text-white text-3xl md:text-7xl text-center tracking-wider',
                forum.className
              )}
            >
              FEAST IN <br />
              STYLE
            </h3>
            <p className={twMerge('text-gray-100', noto_sans.className)}>
              Taste The Wasabi Experience
            </p>
            <button
              className={twMerge(
                'py-3.5 px-8 text-xs text-black rounded-2xl font-bold',
                forum.className
              )}
              style={{ backgroundColor: '#C0A078' }}
            >
              <span className="font-bold tracking-wider">RESERVE</span>
            </button>
          </div>
        </div>
      </div>
      <div className="sticky top-0 h-screen w-full bg-black text-white flex flex-col items-center justify-between">
        <div className="w-full flex justify-between items-center px-16 pt-8 mx-auto">
          <div
            className={twMerge(
              'hidden flex-1 md:flex justify-between',
              forum.className
            )}
          >
            <span className="text-[#C0A079] font-light tracking-widest">
              HOME
            </span>
            <span className="text-[#C0A079] font-light tracking-widest">
              ABOUT
            </span>
            <span className="text-[#C0A079] font-light tracking-widest">
              MENU
            </span>
            <span className="text-[#C0A079] font-light tracking-widest">
              LOCATION
            </span>
            <span className="text-[#C0A079] font-light tracking-widest">
              CONTACT
            </span>
            <span className="text-[#C0A079] font-light tracking-widest">
              GALLERY
            </span>
            <span className="text-[#C0A079] font-light tracking-widest">
              EVENTS
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <Image
            src={Logo}
            alt="Wasabi Logo"
            className="w-40 h-40 object-contain mb-4"
          />
        </div>
        <div className="w-full flex flex-col items-center mb-8">
          <button
            className="rounded-2xl px-6 py-1 text-sm text-[#C0A079] border border-[#C0A079] mb-4"
            style={{ background: '#110E0A' }}
          >
            SEE LOCATION
          </button>
          <div className="flex gap-6 mb-4">
            <span className="w-8 h-8 flex items-center justify-center border border-[#C0A079] rounded-full text-[#C0A079] text-lg">
              <Image
                width="1800"
                height="1800"
                src={phoneLogo}
                alt="An image of a phone"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="w-8 h-8 flex items-center justify-center border border-[#C0A079] rounded-full text-[#C0A079] text-lg">
              <Image
                width="1800"
                height="1800"
                src={envelopeLogo}
                alt="An image of an envelope"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="w-8 h-8 flex items-center justify-center border border-[#C0A078] rounded-full text-[#C0A078] text-lg">
              <Image
                width="1800"
                height="1800"
                src={instagramLogo}
                alt="An instagram logo"
                className="w-full h-full object-cover"
              />
            </span>
          </div>
          <div className="w-full flex justify-between px-8 text-xs text-[#C0A078]">
            <span>© 2025 swiftky. All rights reserved.</span>
            <span>Designed by Malkain Designs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
