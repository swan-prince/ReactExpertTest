import React, { FC, useState } from 'react';
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import CustomStepper from 'components/CustomStepper';
import ExpressionContent from './ExpressionContent';
import DefileRuleSetContent from './DefileRuleSetContent';
import TransactionContent from './TransactionContent';

import infoSvg from 'assets/img/info.svg';
import closeSvg from 'assets/img/close.svg';
import unionSvg from 'assets/img/union.svg';
import complementSvg from 'assets/img/complement.svg';
import intersectionSvg from 'assets/img/intersection.svg';
import differenceSvg from 'assets/img/difference.svg';

import { ExpressionItemType, RuleType } from 'typings';

import styles from 'assets/jss/ruleBuilderModalStyles';

const useStyles = makeStyles(styles);

interface Props {
  open: boolean;
  handleClose: () => void;
}

const RuleBuilderModal: FC<Props> = (props) => {

  const { open, handleClose } = props;

  const classes = useStyles();

  const [step, setStep] = useState(1);
  const [expression, setExpression] = useState<ExpressionItemType>();
  const [ruleName, setRuleName] = useState('');
  const [rules, setRules] = useState<Array<RuleType>>([]);

  const steps = ['Select Expression', 'Define Rule Set', 'Create Rule'];

  const expressions = [
    {
      title: 'Union',
      img: unionSvg,
      type: 'union'
    },
    {
      title: 'Intersection',
      img: intersectionSvg,
      type: 'intersection'
    },
    {
      title: 'Complement',
      img: complementSvg,
      type: 'complement'
    },
    {
      title: 'Difference',
      img: differenceSvg,
      type: 'difference'
    }
  ];

  const handleSelectExpression = (val: ExpressionItemType) => {
    setExpression(val);
    setStep(2);
  }

  const handleAddRule = (rule: RuleType) => {   
    if (!rules.find((cell) => cell.ruleId === rule.ruleId)) {
      setRules([...rules, rule]);
    }    
  }

  const handleRemoveRule = (rule: RuleType) => {
    setRules(rules.filter((cell) => cell.ruleId !== rule.ruleId));
  } 

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.modalWrapper}
    >
      <Box className={classes.titleBox} position='relative'>
        <Typography variant='h3' fontWeight={700} color='#0F2830'>
          Rule Builder
          <img src={infoSvg} alt="Info" width={12} height={12} />
        </Typography>
        <IconButton onClick={handleClose} className={classes.closeBtn}>
          <img src={closeSvg} alt="" width={15.5} height={15.5} />
        </IconButton>
      </Box>

      <Box sx={{ padding: '10px', marginBottom: '10px' }}>
        <CustomStepper
          steps={steps}
          step={step}
        />
      </Box>
      {
        step === 1 && (
          <DialogContent>
            <ExpressionContent expressions={expressions} setExpression={handleSelectExpression} />
          </DialogContent>
        )
      }
      {
        step === 2 && (
          <>
            <DialogContent>
              <DefileRuleSetContent 
                setRuleName={(e) => setRuleName(e.target.value)} 
                expression={expression}
                selectedRules={rules}
                handleAddRule={handleAddRule}
                handleRemoveRule={handleRemoveRule}
              />
            </DialogContent>
            <Box className={classes.createRuleBtn} textAlign='right'>
              <Button variant='contained' disabled={ruleName === '' || rules.length === 0} onClick={() => setStep(3)}>
                Create Rule
              </Button>
            </Box>
          </>
        )
      }
      {
        step === 3 && (
          <DialogContent>
            <TransactionContent ruleName={ruleName} />
          </DialogContent>
        )
      }
    </Dialog>
  );
}

export default RuleBuilderModal;
