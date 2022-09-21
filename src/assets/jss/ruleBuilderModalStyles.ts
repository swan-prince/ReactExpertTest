import { Theme } from "@mui/system";

const ruleBuilderModalStyles = ((theme: Theme) => ({
  modalWrapper: {
    '& .MuiDialog-paper': {
      maxWidth: '700px',
      width: '700px',
      boxSizing: 'border-box',
      borderRadius: '6px',
      boxShadow: 'none',
      padding: '20px 40px 30px'
    },
    '& .MuiDialogContent-root': {
      padding: '30px',
      border: '1px solid #DCDFE2',
      borderRadius: '6px',
      marginRight: '10px',
      marginLeft: '10px'
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiDialog-paper': {      
        padding: '10px',
        marginLeft: '10px',
        marginRight: '10px'
      },
      '& .MuiDialogContent-root': {
        padding: '20px 0px'
      }
    }
  },
  titleBox: {
    padding: '10px',
    marginBottom: '10px',
    '& h3': {
      fontSize: theme.spacing(2),
      lineHeight: '28px',
      display: 'flex',
      alignItems: 'center',
      '& img': {
        marginLeft: '10px'
      }
    }
  },
  closeBtn: {
    '&.MuiButtonBase-root': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '10px',
      padding: '4.25px'
    }
  },
  expressionBox: {
    paddingLeft: '15px',
    paddingRight: '15px',
    maxWidth: '510px',
    boxSizing: 'border-box' as const,
    '& h3': {
      fontSize: '14px',
      lineHeight: '28px',
      marginBottom: '15px'
    }
  },
  ruleTitleField: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0'
    },
    '& .MuiInputBase-root': {
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '28px',
      width: '210px',
      padding: '0'
    },
    '& .MuiInputBase-input': {
      paddingTop: '0',
      paddingBottom: '0'
    },
    '& .MuiInputAdornment-positionStart': {
      marginLeft: '10px'
    }
  },
  searchBox: {
    padding: '30px',
    marginTop: '27px',
    border: '1px solid #E3E6E8',
    backgroundColor: '#FBFBFC',
    borderRadius: '6px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px'
    }
  },
  searchField: {
    '& .MuiInputBase-root': {
      borderRadius: '6px',
      fontSize: '12px',
      lineHeight: '28px',
      height: '39px',
      paddingLeft: '23px',
      background: '#fff'
    },
    '& .MuiInputBase-input': {
      paddingTop: '5px',
      paddingBottom: '5px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #BCBCBD'      
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #1DC9D4 !important'
    },
    '& .MuiInputBase-root.Mui-focused + .search-dropdown': {
      display: 'block'
    }
  },
  dropdown: {
    marginTop: '10px !important',
    background: '#fff',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '1px solid #E3E6E8',
    borderRadius: '6px',    
    '& .MuiButtonBase-root': {
      padding: '7px 30px',
      fontSize: '10px',
      lineHeight: '18px',
      '& > img': {
        marginLeft: '8px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiButtonBase-root': {
        padding: '7px 15px'      
      },
    }
  },
  chipCell: {
    width: 'calc(50% - 5px)',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  createRuleBtn: {    
    padding: '20px 10px',
    '& .MuiButtonBase-root': {
      backgroundColor: theme.palette.customColors.green,
      boxShadow: 'none',
      color: theme.palette.primary.main,
      fontSize: '14px',
      lineHeight: '28px',
      fontWeight: '700',
      textTransform: 'none',
      padding: '5.5px 22.5px',
      borderRadius: '6px'
    },
    '& .MuiButtonBase-root.Mui-disabled': {
      backgroundColor: '#E8E8E8',
      color: '#BCBCBD'
    }
  }
}));

export default ruleBuilderModalStyles;
