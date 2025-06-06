export const JMVTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div style={styles.title}>{children || 'Aircraft gallery'}</div>;
};

const styles = {
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
    lineHeight: 1,
  },
};
