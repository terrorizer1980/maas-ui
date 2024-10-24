import { createSlice } from "@reduxjs/toolkit";

import { DeviceMeta } from "./types";
import type { CreateParams, DeviceState, UpdateParams } from "./types";

import {
  generateCommonReducers,
  genericInitialState,
} from "app/store/utils/slice";

const deviceSlice = createSlice({
  name: DeviceMeta.MODEL,
  initialState: genericInitialState as DeviceState,
  reducers: generateCommonReducers<
    DeviceState,
    DeviceMeta.PK,
    CreateParams,
    UpdateParams
  >(DeviceMeta.MODEL, DeviceMeta.PK),
});

export const { actions } = deviceSlice;

export default deviceSlice.reducer;
