interface JMVNavigationProps {
  enabled: boolean;
  leftIcon?: string;
  rightIcon?: string;
}

export const JMVNavigation: React.FC<JMVNavigationProps> = ({
  enabled,
  leftIcon,
  rightIcon,
}) => {
  if (!enabled) return null;

  return (
    <>
      {leftIcon ? (
        <div className="swiper-button-prev">
          <img src={leftIcon} alt="Previous" style={styles.navIcon} />
        </div>
      ) : (
        <div className="swiper-button-prev"></div>
      )}

      {rightIcon ? (
        <div className="swiper-button-next">
          <img src={rightIcon} alt="Next" style={styles.navIcon} />
        </div>
      ) : (
        <div className="swiper-button-next"></div>
      )}
    </>
  );
};

const styles = {
  navIcon: {
    height: '16px',
    width: '16px',
  },
};
