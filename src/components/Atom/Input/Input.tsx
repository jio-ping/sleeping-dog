import useMode from "@/store/useMode";
import useStorage from "@/store/useStorage";
export default function Input() {
  const { setName, name } = useStorage((state) => state);
  const darkmode = useMode((state) => state.darkmode);
  const handleSaveName = () => {
    const name = document.querySelector<HTMLInputElement>("#petName");
    if (name) {
      setName(name.value);
    }
  };
  return (
    <>
      <input
        id="petName"
        autoComplete="off"
        className={`h-12 w-[80px] border-b-2 bg-transparent text-center font-['TTLaundryGothicB'] text-xl  outline-none 
        
        ${darkmode ? "border-dark-txt-1 text-dark-txt-1 " : " border-black text-black"}`}
        type="text"
        placeholder={name == "" ? "이름🐶🐱" : name}
        onBlur={handleSaveName}
      />
    </>
  );
}
