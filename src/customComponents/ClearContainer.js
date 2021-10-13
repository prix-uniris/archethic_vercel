import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const ClearContainer = styled(Container)(({ theme }) => ({
  background: "none",
}));

const ClearResetContainer = styled(Container)(({ theme }) => ({
  background: "none",
  margin: "0px",
  padding: 0,
  root: {
    padding: "0px",
    maxWidth: "auto"
  }
}));


export default ClearContainer
export {
  ClearResetContainer
}
