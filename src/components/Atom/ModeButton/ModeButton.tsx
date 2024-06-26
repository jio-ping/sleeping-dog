import darkmodeIcon from "@/assets/darkmode.svg";
import lightmodeIcon from "@/assets/lightmode.svg";

import useMode from "@/store/useMode";
export default function ModeButton() {
  const { darkmode, convertMode } = useMode((state) => state);
  return (
    <button className="h-16 w-20 " onClick={convertMode}>
      <figure className="flex flex-col items-center justify-around dark:text-dark-txt-1">
        {darkmode ? (
          <img className="w-8" src={darkmodeIcon} />
        ) : (
          <img className="w-8" src={lightmodeIcon} />
        )}
        <figcaption className="justify-self-end">
          {darkmode ? (
            <span className=" text-xs text-dark-txt-1">라이트모드적용 </span>
          ) : (
            <span className="text-xs text-black">다크모드적용</span>
          )}
        </figcaption>
      </figure>
    </button>
  );
}
