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
import ClipLoader from "react-spinners/ClipLoader";

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
      <ClipLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={150}
      />
    </>
  );
}

export default LoadingStopList;
