import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../database";
import { v4 as uuidv4 } from "uuid";

type Lesson = {
  _id: string;
  name: string;
  description?: string;
  module: string;
};

type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
};

const initialState = {
  modules: modules as Module[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule = {
        ...module,
        _id: uuidv4(),
      } as Module;
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((module) => module._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m._id === module._id ? (module as Module) : m
      );
    },
    setModules: (state, { payload: modules }) => {
      state.modules = modules;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
