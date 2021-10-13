import React from 'react';

import { Typography, Button,  } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({theme}) => ({
  background: "none",
  border: `1px solid ${theme.palette.text.primary}`,
  transition: `all 0.3s ease`,
  color: theme.palette.text.primary,
  padding: `10px 30px`,
  borderRadius: 30,
  textTransform: "none",
  fontWeight: "normal",
  margin: `5px 5px`,
  "&:hover": {
    color: "#000",
    background: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
  }
}))

const SecondaryButton = ({onClick, variant, children}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  )
}

export default SecondaryButton
