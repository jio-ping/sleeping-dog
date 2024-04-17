/* 로컬스토리지에 저장된 이름이 있다면 바로 value에 써주고 없으면 반려동물의 이름을 입력해주세요 
엔터 누르면 자동으로 로컬스토리지에 저장? | 디바운싱 적용해서 로컬스토리지에 저장? -> 상태관리해야됨 | 그냥 초점 이동하면 저장?
! */
import useMode from "@/store/useMode";
import useStorage from "@/store/useStorage";
export default function Input() {
  const { setName } = useStorage((state) => state);
  const handleSaveName = () => {
    const name = document.querySelector<HTMLInputElement>("#petName");
    if (name) {
      setName(name.value);
    }
  };
  const darkmode = useMode((state) => state.darkmode);
  return (
    <>
      <input
        id="petName"
        className={`h-12 w-[80px] border-b-2 bg-transparent text-center font-['TTLaundryGothicB'] text-xl  outline-none 
        
        ${darkmode ? "border-dark-txt-1 text-dark-txt-1 " : " border-black text-black"}`}
        type="text"
        placeholder="이름🐶🐱"
        onBlur={handleSaveName}
      />
    </>
  );
}
