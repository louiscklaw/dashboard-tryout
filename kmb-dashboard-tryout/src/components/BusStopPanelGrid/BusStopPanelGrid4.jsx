import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useParams } from "react-router-dom";
import BusStopPanelContainer from "../BusStopPanelContainer";
import IconButtonWithLink from "../IconButtonWithLink";

export default function BusStopPanelGrid4() {
  let params = useParams();
  let { bus_stop_id1, bus_stop_id2, bus_stop_id3, bus_stop_id4 } = params;

  return (
    <>
      <Paper square>
        <Grid container>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer
              bus_stop_id={bus_stop_id1}
              show_loading={true}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id2} />
          </Grid>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id3} />
          </Grid>
          <Grid item xs={12} md={3}>
            <BusStopPanelContainer bus_stop_id={bus_stop_id4} />
          </Grid>
        </Grid>

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
                <Typography variant="caption">
                  last update: 2022-06-23
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
    </>
  );
}
