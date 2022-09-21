import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ExpressionItem from 'components/ExpressionItem';

import { ExpressionItemType } from 'typings';

import styles from 'assets/jss/ruleBuilderModalStyles';

const useStyles = makeStyles(styles);

interface Props {
  expressions: ExpressionItemType[];
  setExpression: (val: ExpressionItemType) => void;
}

const ExpressionContent: FC<Props> = (props) => {

  const classes = useStyles();

  const { expressions, setExpression } = props;

  return (
    <Box className={classes.expressionBox}>
      <Typography variant='h3' fontWeight={700}>
        Which Type of Rule do you want to create?
      </Typography>
      <Box display='flex' justifyContent='space-between' flexWrap='wrap' sx={{maxWidth: '420px'}}>
        {
          expressions.map((cell) => (
            <ExpressionItem 
              expression={cell}
              key={cell.title}
              handleClick={() => setExpression(cell)}
            />
          ))
        }
      </Box>
    </Box>
  );
}

export default ExpressionContent;
