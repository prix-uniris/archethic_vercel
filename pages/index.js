import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import ClearContainer from '../src/customComponents/ClearContainer';

// Sections Imports

import Landing from '../src/components/home/landing';
import Features from '../src/components/home/features';

export default function Index() {
  return (
    <ClearContainer maxWidth="xl">
      <Landing />
      <Features />
    </ClearContainer>
  );
}
