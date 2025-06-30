import { JMVSlideImageType, type JMVSlideType } from '../types';

interface IJMVSlideProps {
  type: JMVSlideType;
  file: string;
  description: string;
  style?: {
    width?: number;
    height?: number;
  };
}

export const JMVSlide: React.FC<IJMVSlideProps> = ({
  type,
  file,
  description,
  style,
}) => {
  const Image = type === JMVSlideImageType.PHOTO ? JMVSlidePhoto : JMVSlidePano;

  return (
    <div style={{ ...styles.slideContainer, ...style }}>
      <div style={styles.imageWrapper}>
        <Image file={file} description={description} />
      </div>

      <div className="slide-description" style={styles.description}>
        <p style={styles.descriptionText}>{description}</p>
      </div>
    </div>
  );
};

const JMVSlidePhoto: React.FC<Omit<IJMVSlideProps, 'type'>> = ({
  file,
  description,
}) => {
  return <img src={file} alt={description} style={styles.slideImage} />;
};

const JMVSlidePano: React.FC<Omit<IJMVSlideProps, 'type'>> = ({ file }) => {
  return (
    <iframe
      src={file}
      title="panorama iframe"
      allow="fullscreen"
      style={styles.slideImage}
    />
  );
};

const styles = {
  description: {
    fontSize: 14,
    fontWeight: 400,
  },
  descriptionText: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '40px',
  },
  slideContainer: {
    height: 420,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  imageWrapper: {
    position: 'relative' as const,
    minHeight: '95%',
    width: '100%',
    height: '100%',
  },
  slideImage: {
    height: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover' as const,
    position: 'absolute' as const,
    width: '100%',
  },
};
