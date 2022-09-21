import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RuleBuilderModal from 'components/RuleBuilderModal';

const IndexPage = () => {

  const [open, setOpen] = useState(true)

  return (
    <Box>
      <Button variant='contained' onClick={() => setOpen(true)}>
        Create Rule
      </Button>

      <RuleBuilderModal
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Box>
  );
}

export default IndexPage;
