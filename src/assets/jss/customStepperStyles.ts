import { Theme } from "@mui/system";

const customStepperStyles = ((theme: Theme) => ({
  stepper: {
    '& .milestone-cell:first-child': {
      '&::before': {
        right: '0',
        left: 'unset'
      },
      '&::after': {
        display: 'none'
      }
    },
    '& .milestone-cell:last-child': {
      '&::after': {
        display: 'none'
      }
    },
    '& .active': {
      '&::after': {
       right: '-12px'
      },
      '&::before': {
        left: '-12px'
       }
    }
  },
  milestone: {
    '& p': {
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
      color: theme.palette.customColors.grey
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '50%',
      height: '2px',
      top: '7px',
      backgroundColor: 'rgba(94, 110, 120, 0.2)',
      left: '0'
    },
    '&::after': {
      content: `''`,
      position: 'absolute',
      width: '50%',
      height: '2px',
      top: '7px',
      backgroundColor: 'rgba(94, 110, 120, 0.2)',
      right: '0'
    }
  },
  point: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    marginBottom: '10px',
    zIndex: "2",
    backgroundColor: '#fff',
    '& img': {
      zIndex: '3',
      position: 'relative'
    },
    '&::before': {
      width: '8px',
      height: '8px',
      content: `''`,
      borderRadius: '50%',
      backgroundColor: theme.palette.customColors.grey,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute'
    }
  },
  active: {
    '& > div': {
      backgroundColor: theme.palette.customColors.green,
      '&::before': {
        display: 'none'
      }
    },
    '& p': {
      color: theme.palette.customColors.green,
      fontWeight: '700'
    },
    '&::before': {
      backgroundColor: theme.palette.customColors.green,
    },
  },
  passed: {
    '&::after': {
      backgroundColor: theme.palette.customColors.green,
    }
  }
}));

export default customStepperStyles;
