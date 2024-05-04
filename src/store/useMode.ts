import { create } from "zustand";

function checkMode(): boolean {
  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  return isDark;
}

type ModeState = {
  darkmode: boolean;
  currentState: "measure" | "record";
  convertMode: () => void;
  convertState: () => void;
};

const useMode = create<ModeState>((set) => ({
  currentState: "measure",
  convertState: () =>
    set((state) => ({
      currentState: state.currentState === "record" ? "measure" : "record",
    })),
  darkmode: checkMode(),
  convertMode: () => set((state) => ({ darkmode: !state.darkmode })),
}));

export default useMode;
