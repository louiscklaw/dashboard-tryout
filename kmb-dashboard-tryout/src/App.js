import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import screencapture_png from "./assets/screencapture.png";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import IconButtonWithLink from "./components/IconButtonWithLink";

import {
  Stack,
  IconButton,
  Link,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Joyride from "react-joyride";

import GrabBusLink from "./components/GrabBusLink";

const queryClient = new QueryClient();

let tour_processed_ls_key = "welcome_tour";

export default function App() {
  let [tour_shown] = React.useState(
    JSON.parse(localStorage.getItem("tour_processed_ls_key"))
  );
  let [steps] = React.useState([
    {
      target: ".title",
      content: "welcome to my web site",
    },
    {
      target: "#select-bus-stop-list",
      content:
        "you can select the bus stop want to monitored here (maximum to 4)",
    },
    {
      target: "#get-page-link",
      content:
        "copy the link shown here, and paste it into new window to see the magic",
    },
  ]);

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;
    if (status === "finished") {
      localStorage.setItem("tour_processed_ls_key", JSON.stringify(true));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {tour_shown ? (
        <></>
      ) : (
        <Joyride
          steps={steps}
          continuous={true}
          locale={{
            back: "Back",
            close: "Close",
            last: "Done",
            next: "Next",
            open: "Open the dialog",
            skip: "Skip",
          }}
          callback={handleJoyrideCallback}
        />
      )}
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Stack spacing={5}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={"title"}
          >
            個人化 巴士站 dashboard
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
          <img
            src={screencapture_png}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "66vw",
              maxHeight: "33vh",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "0.5rem",
            }}
          />
          <GrabBusLink />
        </Stack>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid
              item
              xs={4}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-end"
                alignItems={"flex-end"}
              >
                <IconButtonWithLink
                  link="https://github.com/louiscklaw/dashboard-tryout/tree/master/kmb-dashboard-tryout"
                  icon={<FaGithub />}
                />
                <IconButtonWithLink
                  link="https://www.linkedin.com/in/louiscklaw"
                  icon={<FaLinkedin />}
                />
              </Stack>
            </Grid>
            <Grid item xs={4} container justifyContent="flex-end">
              <Typography variant="caption">last update: 2022-06-23</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
