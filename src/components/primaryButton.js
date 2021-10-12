import React from 'react';

import { Typography, Button,  } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({theme}) => ({
  background: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  transition: `all 0.3s ease`,
  color: theme.palette.text.primary,
  padding: `10px 30px`,
  borderRadius: 30,
  textTransform: "none",
  fontWeight: "normal",
  margin: `5px 5px`,
  "&:hover": {
    background: "none",
    border: `1px solid ${theme.palette.text.primary}`,
  }
}))

const PrimaryButton = ({text, onClick, variant}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {text}
    </StyledButton>
  )
}

export default PrimaryButton
