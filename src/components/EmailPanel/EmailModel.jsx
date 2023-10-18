import {
  Backdrop,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";
const EmailModel = ({ open, setOpen, data }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ mb: 0 }}>{data.subject}</DialogTitle>
      <DialogContent sx={{ py: 2 }}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          defaultValue={data.body}
          InputProps={{
            readOnly: true,
          }}
          sx={{ mb: 2, mt: 2 }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EmailModel;
