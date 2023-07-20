import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box height='600px' width='100%'>
    <Stack direction='row' justifyContent='center' alignItems='center' height='100%' width='100%' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
