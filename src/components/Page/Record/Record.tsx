import { useState, useEffect } from "react";
import { Input, ModeButton, CountButton } from "@/components/Atom/index";
import Modal from "@/components/Molecules/Modal/Modal.tsx";
/*

1. 시작버튼 터치 시 
  버튼 텍스트 변경
  초 단위로 시간 시간 단축 
2. 터치 버튼 클릭시 카운트 추가
3. 잔여 초가 0일때 결과를 담은 모달 노출
  기록 -> localstorage에 저장 / 초기화
  닫기 -> 초기화
4. 강아지 input에 이름 작성하면 새로고침할때도 이름 저장

*/

export default function Record() {
  const [measurement, setMeasurement] = useState(false);
  const [remainTime, setRemainTime] = useState(60);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let countId: number;
    if (measurement && remainTime > 0) {
      countId = setInterval(
        () => setRemainTime((remainTime) => remainTime - 1),
        1000,
      );
    } else if (remainTime === 0) {
      setMeasurement(false);
      setRemainTime(60);
      setModal(true);
    }
    return () => clearInterval(countId);
  }, [measurement, remainTime]);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Input />
        <ModeButton />
      </div>
      <div className="font-['TTLaundryGothicB']">
        <p>
          남은 시간 <em>{remainTime}</em> 초
        </p>
        <p>
          <em>{count}</em>회
        </p>
      </div>
      <button className="" onClick={() => setMeasurement((prev) => !prev)}>
        {measurement ? "멈춤" : "시작"}
      </button>
      <CountButton>시작</CountButton>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
      {modal ? <Modal closeFn={() => setModal(false)} /> : ""}
    </div>
  );
}
