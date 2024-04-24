import useMode from "@/store/useMode";
import Record from "@/components/Page/Record/Record";
// import Measure from "@/components/Page/Measure/Measure";

export default function App() {
  const darkmode = useMode((state) => state.darkmode);
  return (
    <div
      className={`${darkmode ? "bg-[url('/darkmode.svg')]" : 'bg-[url("/lightmode.svg")]'} m-auto h-svh max-w-screen-sm bg-cover bg-bottom bg-no-repeat `}
    >
      {/* <Measure /> */}
      <Record />
    </div>
  );
}
