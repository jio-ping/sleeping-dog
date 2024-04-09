import useMode from "@/store/useMode";

type Button = {
  handleFn: () => void;
  children: React.ReactNode;
};

export default function CountButton({ handleFn, children }: Button) {
  const darkmode = useMode((state) => state.darkmode);

  return (
    <button
      onClick={handleFn}
      className={`rounded-[30px] border-4 px-7 py-2 font-['TTLaundryGothicB'] text-xl ${darkmode ? "  border-dark-gray text-dark-gray" : "border-light-black text-light-black"}`}
    >
      {children}
    </button>
  );
}
