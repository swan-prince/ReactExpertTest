import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import infoSvg from 'assets/img/info-grey.svg';
import dotSvg from 'assets/img/rec-dot.svg';
import closeSvg from 'assets/img/close-black.svg';

import { RuleType } from 'typings';

import styles from 'assets/jss/ruleChipStyles';

const useStyles = makeStyles(styles);

interface Props {
  rule: RuleType;
  handleRemove: () => void;
}

const RuleChip: FC<Props> = (props) => {

  const classes = useStyles();

  const { rule, handleRemove } = props;

  return (
    <Box className={classes.chip} display='flex' alignItems='center' position='relative'>
      <img src={dotSvg} alt="" width={8} />
      <Typography variant='body1'>
        {rule.title}
      </Typography>
      <img src={infoSvg} alt="" width={10} />
      <img src={closeSvg} alt="" width={7.2} className={classes.closeBtn} onClick={handleRemove} />
    </Box>
  )
}

export default RuleChip;
