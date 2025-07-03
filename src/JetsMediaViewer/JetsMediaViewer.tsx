import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Pagination, Navigation } from 'swiper/modules';

import { JMVThumbnail, JMVCloseButton, JMVTitle, JMVSlide, JMVNavigation } from './partials';
import type { JetsMediaViewerConfig, JMVSlideType } from './types';
import { useJetsMediaViewer } from './hooks';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface JetsMediaViewerProps {
  config: JetsMediaViewerConfig;
}

const JetsMediaViewer: React.FC<JetsMediaViewerProps> = ({ config }) => {
  const { title, thumbsSwiper, slides, setThumbsSwiper } = useJetsMediaViewer(config);

  const computedStyles = {
    ...(config.pagination?.activeBulletColor && {
      '--swiper-pagination-color': config.pagination.activeBulletColor,
    }),
    ...(config.navigation?.color && {
      '--swiper-navigation-color': config.navigation.color,
    }),
    ...(config.navigation?.enabled &&
      config.navigation?.leftIcon && {
        '--swiper-navigation-size': '0px',
      }),
    ...(config.navigation?.enabled &&
      config.navigation?.rightIcon && {
        '--swiper-navigation-size': '0px',
      }),
  } as React.CSSProperties;

  return (
    <div style={styles.container}>
      <div style={{ ...styles.overlay, ...config.styles?.overlay }}></div>

      <div style={{ ...styles.content, ...config.styles?.modal }}>
        <JMVCloseButton onClick={config.onClose} />

        <JMVTitle>{title}</JMVTitle>

        {/* Main Swiper */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[
            Thumbs,
            ...(config.pagination?.enabled ? [Pagination] : []),
            ...(config.navigation?.enabled ? [Navigation] : []),
          ]}
          allowTouchMove={true}
          style={computedStyles}
          pagination={
            config.pagination?.enabled
              ? {
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                }
              : false
          }
          navigation={
            config.navigation?.enabled
              ? {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
              : false
          }
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.key + '-main'}>
              <JMVSlide
                type={slide.type as JMVSlideType}
                file={slide.file}
                description={slide.description}
                style={config.styles?.slides}
              />
            </SwiperSlide>
          ))}

          {config.navigation?.enabled && (
            <JMVNavigation
              enabled={config.navigation?.enabled || false}
              leftIcon={config.navigation?.leftIcon}
              rightIcon={config.navigation?.rightIcon}
            />
          )}
        </Swiper>

        {/* Thumbnails Swiper */}
        <div style={styles.thumbnails}>
          <Swiper spaceBetween={8} slidesPerView={5} watchSlidesProgress onSwiper={setThumbsSwiper} modules={[Thumbs]}>
            {slides.map(slide => (
              <SwiperSlide key={slide.key + '-thumb'}>
                <JMVThumbnail
                  thumb={slide.thumb}
                  description={slide.description}
                  type={slide.type as JMVSlideType}
                  style={config.styles?.thumbnails}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: '#000',
    height: '100%',
    left: 0,
    opacity: 0.6,
    position: 'absolute' as const,
    top: 0,
    width: '100%',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 20,
    maxWidth: '100%',
    padding: '20px 30px',
    position: 'relative' as const,
    width: 760,
  },
  thumbnails: {
    marginTop: 16,
  },
};

export default JetsMediaViewer;
