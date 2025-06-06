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
      <div>
        <Image file={file} description={description} />
      </div>

      <div style={styles.description}>
        <p>{description}</p>
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
    position: 'absolute' as const,
    bottom: -25,
  },
  slideContainer: {
    height: 420,
    display: 'flex',
    flexDirection: 'column' as const,
    position: 'relative' as const,
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
