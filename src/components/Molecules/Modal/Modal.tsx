import { testResult } from "@/utils";
import useMode from "@/store/useMode";
import useStorage from "@/store/useStorage";

interface ResultProps {
  time: string;
  name: string;
  counts: number;
}
interface ModalProps {
  closeFn: React.MouseEventHandler<HTMLButtonElement>;
  result: ResultProps;
}

export default function Modal({ closeFn, result }: ModalProps) {
  const { time, name, counts } = result;
  const darkmode = useMode((state) => state.darkmode);
  const convertState = useMode((state) => state.convertState);
  const setRecord = useStorage((state) => state.setRecord);
  const handleRecord = () => {
    setRecord({ dateTime: time, counts: counts });
    convertState();
  };
  return (
    <dialog
      open={true}
      className={`inset-0 flex w-[70%] flex-col justify-center font-['TTLaundryGothicB'] font-normal ${darkmode ? "bg-black" : "bg-white"} opacity-85`}
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
        <button className="flex-grow py-2" onClick={handleRecord}>
          기록 📝
        </button>
      </div>
    </dialog>
  );
}
