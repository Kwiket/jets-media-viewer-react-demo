import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import { JMVThumbnail, JMVCloseButton, JMVTitle, JMVSlide } from "./partials";
import type { JetsMediaViewerConfig, JMVSlideType } from "./types";
import { useJetsMediaViewer } from "./hooks";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface JetsMediaViewerProps {
  config: JetsMediaViewerConfig;
}

const JetsMediaViewer: React.FC<JetsMediaViewerProps> = ({ config }) => {
  const { title, thumbsSwiper, slides, setThumbsSwiper } =
    useJetsMediaViewer(config);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={{ ...styles.content, ...config.styles?.modal }}>
        <JMVCloseButton />

        <JMVTitle>{title}</JMVTitle>

        {/* Main Swiper */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          allowTouchMove={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.key + "-main"}>
              <JMVSlide
                type={slide.type as JMVSlideType}
                file={slide.file}
                description={slide.description}
                style={config.styles?.slides}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Swiper */}
        <div style={styles.thumbnails}>
          <Swiper
            spaceBetween={8}
            slidesPerView={4}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.key + "-thumb"}>
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
    width: "100%",
    height: "100%",
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "#000",
    height: "100%",
    left: 0,
    opacity: 0.6,
    position: "absolute" as const,
    top: 0,
    width: "100%",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: 20,
    maxWidth: "100%",
    padding: "20px 30px",
    position: "relative" as const,
    width: 760,
  },
  thumbnails: {
    marginTop: 16,
  },
};

export default JetsMediaViewer;
