import { useState, useMemo } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { JMVSlideImageType, type JetsMediaViewerConfig } from '../types';

export const useJetsMediaViewer = (config: JetsMediaViewerConfig) => {
  const { panoData, photoData, title } = config;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const slides = useMemo(
    () => [
      ...(photoData || []).map((item, idx) => ({
        type: JMVSlideImageType.PHOTO,
        ...item,
        key: `photo-${idx}`,
      })),
      ...(panoData || []).map((item, idx) => ({
        type: JMVSlideImageType.PANO,
        ...item,
        key: `pano-${idx}`,
      })),
    ],
    [photoData, panoData]
  );

  return {
    title,
    slides,
    thumbsSwiper,
    setThumbsSwiper,
  };
};
