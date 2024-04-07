/* 로컬스토리지에 저장된 이름이 있다면 바로 value에 써주고 없으면 반려동물의 이름을 입력해주세요 
엔터 누르면 자동으로 로컬스토리지에 저장? | 디바운싱 적용해서 로컬스토리지에 저장? -> 상태관리해야됨 | 그냥 초점 이동하면 저장?
! */
// import { useEffect } from "react";
export default function Input() {
  const mode = {
    dark: "dark-txt-1",
    light: "black",
  };

  const handleSaveName = () => {
    const name = document.querySelector<HTMLInputElement>("#petName");
    if (name) {
      localStorage.setItem("petName", name.value);
    }
  };

  return (
    <>
      <input
        id="petName"
        className={`py-3 text-[20px] font-['TTLaundryGothicB'] bg-transparent w-[80px] outline-none text-${mode["light"]}  border-b-2 border-${mode.light} text-center`}
        type="text"
        placeholder="이름🐶🐱"
        onBlur={handleSaveName}
      />
    </>
  );
}
