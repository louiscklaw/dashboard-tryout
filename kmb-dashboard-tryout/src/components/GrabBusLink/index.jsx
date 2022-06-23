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
  Chip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { VariableSizeList } from "react-window";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";

// import { BusStopContext } from "./BusStop";
import { BusStopContext } from "../../contexts/StopList/BusStop";
import { useContext, useEffect, useMemo, useState } from "react";
import { RouteStopListContext } from "../../contexts/StopList/RouteStopList";
import { RouteListContext } from "../../contexts/StopList/RouteList";
import { set, uniq } from "lodash";
import TestLink from "../TestLink";

import { CopyToClipboard } from "react-copy-to-clipboard";
import PuffLoader from "react-spinners/PuffLoader";

let page_url = "http://localhost:3000";

const LISTBOX_PADDING = 8; // px

function LoadingStopList() {
  let [color, setColor] = useState("#ffffff");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ paddingTop: "3rem" }}
      >
        <PuffLoader color={`rgb(31, 45, 84)`} loading={true} size={100} />
        <Typography variant="body1">正在更新巴士站列表...</Typography>
      </Stack>
    </>
  );
}

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

// export default () => {
function GrabBusLink() {
  const checkedIcon = useMemo(() => <CheckBoxIcon fontSize="small" />);
  const icon = useMemo(() => <CheckBoxOutlineBlankIcon fontSize="small" />);

  let { stop_list } = useContext(BusStopContext);
  let { route_stop_list } = useContext(RouteStopListContext);
  let { route_list } = useContext(RouteListContext);

  let [OPTIONS, setOptions] = useState([]);
  let [debug, setDebug] = useState([]);

  let [bus_stop_selected, setBusStopSelected] = useState([]);
  let [is_updating_bus_stop, setIsUpdatingBusStop] = useState(true);
  let [stop_list_dictionary, setStopListDictionary] = useState([]);
  let [url_string, setUrlString] = useState("");

  let [copied, setCopied] = useState(false);

  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );

  useEffect(() => {
    // bus_stop_selected
    if (bus_stop_selected.length > 0) {
      let temp = bus_stop_selected.map((bs_sel) => bs_sel.stop).join("/");
      setUrlString(`${page_url}/bus_stops/${temp}`);
    } else {
      setUrlString(`please select some bus stops`);
    }
  }, [bus_stop_selected]);

  useEffect(() => {
    if (stop_list && route_stop_list && route_list) {
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

        stop.show_select_string =
          "🚏 " +
          stop.name_tc +
          "站: 往 " +
          uniq(stop.bus_stop_info.map((bus_stop) => bus_stop.dest_tc)).join(
            ","
          ) +
          " 方向";

        return stop;
      });

      setStopListDictionary(stop_list);
      setOptions(
        stop_list.map((stop) => {
          return (
            "🚏 " +
            stop.name_tc +
            "站: 往 " +
            uniq(stop.bus_stop_info.map((bus_stop) => bus_stop.dest_tc)).join(
              ","
            ) +
            " 方向"
          );
        })
      );

      setIsUpdatingBusStop(false);
    }
  }, [stop_list, route_stop_list, route_list]);

  if (is_updating_bus_stop) return <LoadingStopList />;

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Autocomplete
            id="select-bus-stop-list"
            multiple
            PopperComponent={StyledPopper}
            ListboxComponent={ListboxComponent}
            options={OPTIONS}
            noOptionsText="加巴士站"
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => <TextField {...params} label="加巴士站" />}
            renderOption={(props, option) => [props, option]}
            onChange={(e, newValue) =>
              setBusStopSelected(
                newValue.map(
                  (nv) =>
                    stop_list_dictionary.filter(
                      (sld) => sld.show_select_string === nv
                    )[0]
                )
              )
            }
          />
        </Grid>
      </Grid>

      <CopyToClipboard text={url_string} onCopy={() => setCopied(true)}>
        <TextField
          id="get-page-link"
          label="Name"
          value={url_string}
          size="small"
          disabled={bus_stop_selected.length <= 0}
          InputProps={{
            endAdornment: (
              <Button disabled={bus_stop_selected.length <= 0}>Copy</Button>
            ),
          }}
        />
      </CopyToClipboard>
    </>
  );
}

export default GrabBusLink;
