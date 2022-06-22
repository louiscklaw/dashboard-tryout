import * as React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Button,
  Checkbox,
  Stack,
  TextField,
  Paper,
  Popper,
  useMediaQuery,
  ListSubheader,
  useTheme,
  styled,
  Container,
  Box,
  Grid,
} from "@mui/material";

import { VariableSizeList } from "react-window";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";

import { BusStopContext } from "./BusStop";
import { useContext, useEffect, useMemo, useState } from "react";
import { RouteStopListContext } from "./RouteStopList";
import { RouteListContext } from "./RouteList";
import { set, uniq } from "lodash";
import TestLink from "../TestLink";

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: style.top + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty("group")) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  const { children, ...other } = props;
  const itemData = [];
  children.forEach((item) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });

  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (child.hasOwnProperty("group")) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node,
};

function random(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

export default function Virtualize() {
  const checkedIcon = useMemo(() => <CheckBoxIcon fontSize="small" />);
  const icon = useMemo(() => <CheckBoxOutlineBlankIcon fontSize="small" />);

  let { stop_list } = useContext(BusStopContext);
  let { route_stop_list } = useContext(RouteStopListContext);
  let { route_list } = useContext(RouteListContext);

  let [OPTIONS, setOptions] = useState([]);
  let [debug, setDebug] = useState([]);

  useEffect(() => {
    if (stop_list && route_stop_list && route_list) {
      setDebug(
        stop_list.map((stop) => {
          stop.bus_stop_info = route_stop_list
            .filter((route_stop) => route_stop.stop == stop.stop)
            .map((route_stop) => {
              let { route: bus_route, bound: bus_bound } = route_stop;
              let route_info = route_list.filter(
                (route) => route.route == bus_route && route.bound == bus_bound
              )[0];

              return { ...route_info };
            });
          return stop;
        })
      );

      setOptions(
        stop_list.map((stop) => {
          let temp_name_string =
            "🚏 " +
            stop.name_tc +
            "站: 往 " +
            uniq(stop.bus_stop_info.map((bus_stop) => bus_stop.dest_tc)).join(
              ","
            ) +
            " 方向";
          return temp_name_string;
        })
      );
    }
  }, [stop_list, route_stop_list, route_list]);

  if (!stop_list) return <>loading stop_list</>;

  return (
    <>
      <Stack direction="column" spacing={5}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Autocomplete
              id="virtualize-demo"
              multiple
              PopperComponent={StyledPopper}
              ListboxComponent={ListboxComponent}
              options={OPTIONS}
              noOptionsText="加巴士站"
              renderInput={(params) => (
                <TextField {...params} label="加巴士站" />
              )}
              renderOption={(props, option) => [props, option]}
            />
          </Grid>
        </Grid>

        <Grid item>get link here</Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained">grab my link 123321</Button>
          </Grid>
        </Grid>
      </Stack>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
