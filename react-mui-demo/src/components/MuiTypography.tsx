import React from "react";
import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quis iste eaque ex excepturi maiores impedit, reprehenderit sapiente voluptate cumque nisi asperiores sunt harum, distinctio quidem animi iusto. Nisi, quas.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat minus blanditiis temporibus distinctio aspernatur magnam. Nisi aspernatur impedit odio blanditiis commodi reiciendis, repellendus saepe, neque, illo iste explicabo necessitatibus.</Typography>
    </div>
  );
};

export default MuiTypography;
