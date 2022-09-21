import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CheckIcon from '@mui/icons-material/Check';

import styles from 'assets/jss/customStepperStyles';

const useStyles = makeStyles(styles);

interface Props {
  steps: string[];
  step: number;
}

const CustomStepper: FC<Props> = (props) => {

  const { steps, step } = props;

  const classes = useStyles();

  return (
    <Box display='flex' justifyContent='space-between' position='relative' className={classes.stepper}>
      {
        steps.map((cell, index) => (
          <Box
            className={clsx(
              'milestone-cell',
              classes.milestone,
              {
                [classes.active]: step >= (index + 1),
                [classes.passed]: step > (index + 1),
                'active': step >= (index + 1)
              }
            )}
            width={`calc(100% / ${steps.length})`}
            display='flex'
            flexDirection='column'
            alignItems='center'
            position='relative'
            key={cell}
          >
            <Box className={clsx(classes.point)} position='relative' display='flex' alignItems='center' justifyContent='center'>
              {
                step > (index + 1) && (
                  <CheckIcon sx={{ color: '#fff', fontSize: '14px' }} />
                )
              }
            </Box>
            <Typography variant='body1' align='center'>
              {cell}
            </Typography>
          </Box>
        ))
      }
    </Box>
  );
}

export default CustomStepper;
