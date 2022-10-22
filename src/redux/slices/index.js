import { createSlice } from "@reduxjs/toolkit";

export const recordsHandler = createSlice({
  name: "records",
  initialState: {
    records: [],
    recordBackUp: [],
    modal: false,
    table: false,
    docId: "",
    updateModal: false,
    recordStatus: "",
  },
  reducers: {
    setAllData: (state, { payload }) => {
      state.records = payload;
      state.recordBackUp = payload;
    },
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
    setTable: (state, { payload }) => {
      state.table = payload;
    },
    setId: (state, { payload }) => {
      state.docId = payload;
    },
    setUpdate: (state, { payload }) => {
      state.updateModal = payload;
    },
    setStatus: (state, { payload }) => {
      state.recordStatus = payload;
    },
  },
});

export const { setAllData, setModal, setTable, setId, setUpdate, setStatus } =
  recordsHandler.actions;

export default recordsHandler.reducer;
