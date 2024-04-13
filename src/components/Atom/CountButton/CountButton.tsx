import useMode from "@/store/useMode";

type Button = {
  children: React.ReactNode;
  handleFn: () => void;
};

export default function CountButton({ children, handleFn }: Button) {
  const darkmode = useMode((state) => state.darkmode);
  return (
    <button
      onClick={handleFn}
      className={`rounded-[30px] border-4 px-7 py-2 font-['TTLaundryGothicB'] text-xl ${darkmode ? " text-black text-dark-gray hover:bg-white hover:text-black" : "border-light-black text-light-black hover:border-white hover:bg-[#A1C7E3] hover:text-white"}`}
    >
      {children}
    </button>
  );
}
