interface ModalProps {
  closeFn: React.MouseEventHandler<HTMLButtonElement>;
}
import useMode from "@/store/useMode";

export default function Modal({ closeFn }: ModalProps) {
  const darkmode = useMode((state) => state.darkmode);

  return (
    <div
      className={`rounded-8 mx-auto flex w-[80%] flex-col justify-center border-none font-['TTLaundryGothicB'] font-normal ${darkmode ? "bg-black" : "bg-white"} opacity-85`}
    >
      <div className="my-7 flex flex-col gap-1 text-center">
        <h3 className={`text-2xl ${darkmode ? "text-white" : "text-black"}`}>
          정상이에요 !
        </h3>
        <p
          className={`font-sans ${darkmode ? "text-dark-gray" : "text-black"}`}
        >
          2024.04.06 18:30 꽁이 20회/분
        </p>
      </div>
      <div
        className={`text-md flex flex-grow border-t font-sans font-medium  ${darkmode ? "border-white text-white" : "border-black text-black"}`}
      >
        <button
          onClick={closeFn}
          className={`flex-grow border-r ${darkmode ? "border-white" : "border-black"} py-2`}
        >
          닫기 🖐️
        </button>
        <button className="flex-grow py-2">기록 📝</button>
      </div>
    </div>
  );
}
