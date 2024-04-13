import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageState {
  name: string;
  setName: (enteredName: string) => void;
}

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      name: "",
      setName: (enteredName) => set({ name: enteredName }),
    }),
    {
      name: "petState",
    },
  ),
);
export default useStorage;
