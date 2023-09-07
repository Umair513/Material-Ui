import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small seconadry"
          size="small"
          color="secondary"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          required
          error={!value}
          helperText={!value ? "Required" : "do not share your password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></TextField>
        <TextField
          label="Password"
          type="password"
          helperText="do not share your password"
          disabled
        ></TextField>
        <TextField
          label="Read only"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
