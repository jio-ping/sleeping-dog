import Record from "@/components/Page/Record/Record.tsx";

export default function App() {
  return (
    <div
      className={`m-auto h-svh max-w-screen-sm bg-[url('/public/darkmode.svg')] bg-no-repeat bg-cover bg-bottom `}
    >
      <Record />
    </div>
  );
}
