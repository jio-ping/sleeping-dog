import { create } from "zustand";
import { persist } from "zustand/middleware";

type Record = {
  dateTime?: string;
  counts?: number;
};
interface StorageState {
  name: string;
  setName: (enteredName: string) => void;
  record: Record[];
  setRecord: ({ dateTime, counts }: Record) => void;
}

const useStorage = create<StorageState>()(
  persist(
    (set, get) => ({
      name: "",
      setName: (enteredName) => set({ name: enteredName }),
      record: [],
      setRecord: ({ dateTime, counts }) => {
        const newRecord = [...get().record, { dateTime, counts }];
        set({ record: newRecord });
      },
    }),
    {
      name: "petState",
    },
  ),
);
export default useStorage;
