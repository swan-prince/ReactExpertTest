import { Theme } from "@mui/system";

const expressionItemStyles = ((theme: Theme) => ({
  expressionItem: {
    width: 'calc(50% - 5px)',    
    '&.MuiButtonBase-root': {
      marginBottom: '15px',
      border: '1px solid rgba(94, 110, 120, 0.2)',
      padding: '0 10px',
      fontSize: '12px',
      lineHeight: '28px',
      fontWeight: '600',
      color: theme.palette.customColors.blue,
      textTransform: 'none',
      justifyContent: 'start',
      '& > img': {
        marginRight: '8px'
      },
      '& .MuiButton-endIcon': {
        marginLeft: 'auto'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}))

export default expressionItemStyles;
