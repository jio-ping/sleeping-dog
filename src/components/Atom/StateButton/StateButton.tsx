import useMode from "@/store/useMode";

export default function StateButton() {
  const { darkmode, convertState, currentState } = useMode((state) => state);
  return currentState === "record" ? (
    <Measure darkmode={darkmode} converState={convertState} />
  ) : (
    <Record darkmode={darkmode} converState={convertState} />
  );
}

type T = {
  darkmode: boolean;
  converState: () => void;
};
function Record({ darkmode, converState }: T) {
  return (
    <button className="h-16 w-20 " onClick={converState}>
      <figure className="flex flex-col items-center  justify-center gap-1 pt-1">
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${darkmode ? "fill-white" : "fill-black"}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 6H6C5.58525 6 5.25 6.336 5.25 6.75C5.25 7.16475 5.58525 7.5 6 7.5H18C18.4147 7.5 18.75 7.16475 18.75 6.75C18.75 6.336 18.4147 6 18 6ZM22.5 21C22.5 21.8242 21.6855 22.509 20.8627 22.509H2.9805C2.15775 22.509 1.49025 21.8415 1.49025 21.0173V3.12375C1.49025 2.2995 2.1765 1.5 3 1.5H21C21.8235 1.5 22.5 2.1765 22.5 3V21ZM21 0H3C1.3545 0 0 1.47675 0 3.12375V21.0173C0 22.665 1.33425 24 2.9805 24H20.8627C22.509 24 24 22.647 24 21V3C24 1.353 22.6455 0 21 0ZM18 15H6C5.58525 15 5.25 15.336 5.25 15.75C5.25 16.1647 5.58525 16.5 6 16.5H18C18.4147 16.5 18.75 16.1647 18.75 15.75C18.75 15.336 18.4147 15 18 15ZM18 10.5H6C5.58525 10.5 5.25 10.836 5.25 11.25C5.25 11.6647 5.58525 12 6 12H18C18.4147 12 18.75 11.6647 18.75 11.25C18.75 10.836 18.4147 10.5 18 10.5Z"
            fill={`${darkmode ? "fill-white" : "fill-black"}`}
          />
        </svg>
        <figcaption className="justify-self-end">
          <span
            className={`text-nowrap text-xs ${darkmode ? "text-dark-txt-1" : "text-black"}`}
          >
            기록보기
          </span>
        </figcaption>
      </figure>
    </button>
  );
}
function Measure({ darkmode, converState }: T) {
  return (
    <button className="h-16 w-20 " onClick={converState}>
      <figure className="flex flex-col items-center justify-between gap-1">
        <svg
          width="29"
          height="29"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${darkmode ? "fill-white" : "fill-black"}`}
        >
          <path
            d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
            fill={`${darkmode ? "fill-white" : "fill-black"}`}
          />
          <path
            d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
            fill={`${darkmode ? "fill-white" : "fill-black"}`}
          />
        </svg>
        <figcaption
          className={`justify-self-end text-xs ${darkmode ? "text-dark-txt-1" : "text-black"}`}
        >
          <span>측정하기</span>
        </figcaption>
      </figure>
    </button>
  );
}
