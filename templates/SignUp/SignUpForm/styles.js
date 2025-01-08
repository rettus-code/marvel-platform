const styles = {
  passwordGridProps: {
    position: 'relative',
    container: true,
    rowGap: 1,
    mb: 1,
  },
  breakProps: { 
    item: true, 
    mobileSmall: 12,
    marginTop: -2, 
  },
  breakHrProps: {
    width: '48%',
    border: (theme) => `1px solid ${theme.palette.Greyscale[800]}`,
    height: '1px',
    marginTop: '10px',
  },
  submitButtonProps: {
    color: 'purple4',
    inverted: true,
    extraProps: {
      padding: '2px',
      height: { laptop: '54px', desktopMedium: '60px' },
      width: '100%',
    },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: '16px',
      px: 4,
    },
  },
};

export default styles;
