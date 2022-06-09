import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Link from "@docusaurus/Link";

export default function ButtonLink({ to, text }) {
  return (
    <Button variant="contained" fullWidth>
      <Link to={to} style={{ color: "#fff" }}>
        {text}
      </Link>
    </Button>
  );
}
