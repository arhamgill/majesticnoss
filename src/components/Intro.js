import Image from 'next/image';
import Box from './Box';

export default function Intro({ data, timeline }) {
  const contentAnimation = delay => {
    timeline
      .from('.intro-heading', { opacity: 0, y: 30, duration: 0.8 }, delay + 0.3)
      .from(
        '.intro-icon',
        { opacity: 0, rotate: -180, duration: 1, ease: 'slow.out' },
        delay + 0.3
      );
  };

  return (
    <Box
      timeline={timeline}
      className={'translate-x-full scale-0 opacity-0'}
      callbackAnimation={contentAnimation}
    >
      <div className='z-10 flex size-full flex-col gap-8'>
        {/* Icon */}
        <div className='ml-auto size-[6rem]'>
          {data?.icon && (
            <Image
              src={data.icon}
              width={100}
              height={100}
              alt='flower'
              className='intro-icon size-full'
            />
          )}
        </div>
        <h1
          className='intro-heading max-w-[40rem] pb-8 font-heading text-[35px] font-normal leading-[100%]'
          dangerouslySetInnerHTML={{ __html: data?.heading }}
        ></h1>
      </div>
    </Box>
  );
}
