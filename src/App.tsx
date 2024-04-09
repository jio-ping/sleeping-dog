import Record from "@/components/Page/Record/Record.tsx";
import useMode from "@/store/useMode";

export default function App() {
  const darkmode = useMode((state) => state.darkmode);
  return (
    <div
      className={`${
        darkmode ? "bg-[url('/darkmode.svg')]" : 'bg-[url("/lightmode.svg")]'
      } m-auto h-svh max-w-screen-sm bg-cover bg-bottom bg-no-repeat `}
    >
      <Record />
    </div>
  );
}
