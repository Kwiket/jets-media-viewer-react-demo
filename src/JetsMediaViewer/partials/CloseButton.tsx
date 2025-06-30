export const JMVCloseButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick }) => {
  return (
    <button style={styles.closeBtn} aria-label="Close" onClick={onClick}>
      <svg
        viewBox="0 0 20 20"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentcolor"
        focusable="false"
        role="img"
      >
        <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4z"></path>
      </svg>
    </button>
  );
};

const styles = {
  closeBtn: {
    position: 'absolute' as const,
    top: 20,
    right: 30,
    width: 16,
    height: 16,
    padding: 0,
    margin: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#000',
    outline: 'none !important',
  },
};
