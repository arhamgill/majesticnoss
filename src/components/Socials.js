import Box from './Box';
import Link from 'next/link';

export default function Socials({ data, timeline }) {
  const contentAnimation = delay => {
    timeline.from(
      '.social-link',
      { yPercent: 100, stagger: 0.18 },
      delay + 0.3
    );
  };

  const isInternalLink = url => {
    return url.startsWith('/');
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='flex size-full items-center justify-evenly gap-2'>
        {data?.links?.map(link =>
          isInternalLink(link.url) ? (
            <Link
              key={link.title}
              href={link.url}
              className='flex overflow-hidden text-base font-medium uppercase leading-[100%]'
            >
              <span className='social-link inline-block'>{link.title}</span>
            </Link>
          ) : (
            <a
              key={link.title}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex overflow-hidden text-base font-medium uppercase leading-[100%]'
            >
              <span className='social-link inline-block'>{link.title}</span>
            </a>
          )
        )}
      </div>
    </Box>
  );
}
