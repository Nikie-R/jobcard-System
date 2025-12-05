import React from 'react';
import { Snackbar, Alert } from '@mui/material';

/**
 * Global Toaster component for displaying notifications
@param {boolean} open - Whether the toaster is open
@param {string} message - The message to display
@param {string} severity - The severity of the message ('success', 'info', 'warning', 'error')
@param {function} onClose - Function to call when the toaster is closed

**/
const Toaster = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;

