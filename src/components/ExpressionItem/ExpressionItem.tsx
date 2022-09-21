import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button';

import { ExpressionItemType } from 'typings';

import infoIcon from 'assets/img/info-blue.svg';

import styles from 'assets/jss/expressionItemStyles';

const useStyles = makeStyles(styles);

interface Props {
  expression: ExpressionItemType;
  handleClick: () => void;
}

const ExpressionItem: FC<Props> = (props) => {

  const { expression, handleClick } = props;

  const classes = useStyles();

  return (
    <Button
      endIcon={<img src={infoIcon} alt='' width={10} height={10} />}
      className={classes.expressionItem}
      onClick={handleClick}
    >
      <img src={expression.img} alt="" width={20} height={20} />
      {expression.title}
    </Button>
  );
}

export default ExpressionItem;
