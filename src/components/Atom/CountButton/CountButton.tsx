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
      className={`rounded-[30px] border-4 px-7 py-2 font-['TTLaundryGothicB'] text-xl ${darkmode ? "text-black text-dark-gray" : "hover:border-white] border-light-black text-light-black "}`}
    >
      {children}
    </button>
  );
}
