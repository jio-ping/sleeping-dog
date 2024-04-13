import useMode from "@/store/useMode";
interface ResultProps {
  time: string;
  name: string;
  counts: number;
}
interface ModalProps {
  closeFn: React.MouseEventHandler<HTMLButtonElement>;
  result: ResultProps;
}

function testResult(counts: number): string {
  if (counts < 15) {
    return "저호흡이에요 😢";
  } else if (15 < counts && counts < 20) {
    return "정상이에요 ☺️";
  } else {
    return "과호흡이에요 😵‍💫";
  }
}

export default function Modal({ closeFn, result }: ModalProps) {
  const { time, name, counts } = result;
  const darkmode = useMode((state) => state.darkmode);

  return (
    <dialog
      open={true}
      className={`rounded-8 inset-0 flex w-[80%] flex-col  justify-center border-none font-['TTLaundryGothicB'] font-normal ${darkmode ? "bg-black" : "bg-white"} opacity-85`}
    >
      <div className="my-7 flex  flex-col gap-1 text-center">
        <h3 className={`text-2xl ${darkmode ? "text-white" : "text-black"}`}>
          {`${name}는 ${testResult(counts)}`}
        </h3>
        <p
          className={`font-sans ${darkmode ? "text-dark-gray" : "text-black"}`}
        >
          {`${time} ${counts}회/분`}
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
    </dialog>
  );
}
