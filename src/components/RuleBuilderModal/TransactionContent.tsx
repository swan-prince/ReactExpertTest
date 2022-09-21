import React, { FC, useState, useEffect } from 'react';
import clsx from 'clsx';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import unionSvg from 'assets/img/union.svg';
import infoSvg from 'assets/img/info-grey.svg';
import spinerImg from 'assets/img/spiner.png';

interface Props {
  ruleName: string;
}

const TransactionContent: FC<Props> = (props) => {

  const { ruleName } = props;

  const [created, setCreated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCreated(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <Box>
      <Box display='flex' alignItems='center' sx={{ padding: '10px 25px' }}>
        <img src={unionSvg} alt="" width={25} height={25} />
        <Typography variant='body1' fontWeight={700} fontSize={14} lineHeight='28px' sx={{ marginLeft: '10px', marginRight: '10px' }}>
          {ruleName}
        </Typography>
        <img src={infoSvg} alt="" width={12} height={12} />
      </Box>

      <Box display='flex' alignItems='center' justifyContent='center'>
        <img src={spinerImg} alt="" className={clsx({ 'loading-spinner': !created })} width={63.7} />
      </Box>

      <Typography variant='body1' fontWeight={700} fontSize={14} lineHeight='28px' sx={{ marginTop: '10px' }} align='center'>
        Sign the transaction...
      </Typography>
    </Box>
  )
}

export default TransactionContent;
