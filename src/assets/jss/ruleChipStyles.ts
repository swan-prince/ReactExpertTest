const ruleChipStyles = (() => ({
  chip: {
    padding: '7px 32px 7px 13.7px',
    backgroundColor: 'rgba(29, 201, 212, 0.2)',
    borderRadius: '6px',
    '& p': {
      fontSize: "10px",
      lineHeight: '18px',
      marginLeft: '11.3px',
      marginRight: '8px'
    }
  },
  closeBtn: {
    cursor: 'pointer' as const,
    marginLeft: '13px',
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    right: '13px'
  }
}))

export default ruleChipStyles;
