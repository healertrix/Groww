import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box className="flex w-full justify-center mt-20">
      <CircularProgress />
    </Box>
  );
}
