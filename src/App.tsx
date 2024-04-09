import Record from "@/components/Page/Record/Record.tsx";

export default function App() {
  return (
    <div
      className={`m-auto h-svh max-w-screen-sm bg-[url("/public/lightmode.svg")] bg-cover bg-bottom bg-no-repeat dark:bg-[url('/public/darkmode.svg')]`}
    >
      <Record />
    </div>
  );
}
