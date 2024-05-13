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
        <meta
          property="og:title"
          content={
            currentState === "record" ? "호흡수 측정하기" : "호흡수 기록보기"
          }
        />
    
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
