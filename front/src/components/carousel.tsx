'use client';

import { Box } from '@mui/material';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode, useCallback, useEffect, useState } from 'react';

export function BannerCarousel({ children }: { children?: ReactNode }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  return (
    <Box component='div' ref={emblaRef} sx={{ overflow: 'hidden' }}>
      <Box component='div' sx={{ display: 'flex' }}>
        {children}
      </Box>
    </Box>
  );
}

export function ProductCarousel({
  children,
  onSlideChange,
}: {
  children?: ReactNode;
  onSlideChange?: (index: number) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <Box>
      <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
        <Box sx={{ display: 'flex' }}>{children}</Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          mt: 2,
        }}
      >
        {scrollSnaps.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollTo(index)}
            sx={{
              width: selectedIndex === index ? '1.5rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '0.25rem',
              backgroundColor:
                selectedIndex === index ? 'primary.main' : 'grey.400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor:
                  selectedIndex === index ? 'primary.dark' : 'grey.600',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
