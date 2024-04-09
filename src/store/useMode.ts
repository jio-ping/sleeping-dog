import { create } from "zustand";

function checkMode(): boolean {
  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  return isDark;
}

type ModeState = {
  darkmode: boolean;
  convertMode: () => void;
};

const useMode = create<ModeState>((set) => ({
  darkmode: checkMode(),
  convertMode: () => set((state) => ({ darkmode: !state.darkmode })),
}));

export default useMode;
