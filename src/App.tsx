import useMode from "@/store/useMode";
import Record from "@/components/Page/Record/Record";
import Measure from "@/components/Page/Measure/Measure";
import { Helmet } from "react-helmet-async";

export default function App() {
  const darkmode = useMode((state) => state.darkmode);
  const currentState = useMode((state) => state.currentState);
  console.log(darkmode);
  return (
    <div
      className={`${darkmode ? "bg-[url('/darkmode.svg')]" : 'bg-[url("/lightmode.svg")]'} m-auto h-svh max-w-screen-sm bg-cover bg-bottom bg-no-repeat `}
    >
      <Helmet>
        <meta name="반려동물 호흡수 측정" />
        <meta property="og:site" content="반려동물 호흡수 측정" />
        <meta
          property="description"
          content="자고있는 우리 아이의 호흡 수를 측정하고 변화를 기록해요 ! 연속성 있는 기록을 위해 같은 브라우저 환경에서 접속해주세요.
        "
        />
        <meta
          property="og:title"
          content={
            currentState === "record" ? "호흡수 측정하기" : "호흡수 기록보기"
          }
        />
        <meta property="og:image" content={"ogimg.png"} />
        <meta name="twiter:image" content={"ogimg.png"} />
        <title>반려동물 호흡수 측정</title>
        <link
          rel="icon"
          type="image/png"
          href={darkmode ? "darkmodefavicon.svg" : "lightmodefavicon.svg"}
        />
      </Helmet>
      {currentState === "record" ? <Record /> : <Measure />}
    </div>
  );
}
