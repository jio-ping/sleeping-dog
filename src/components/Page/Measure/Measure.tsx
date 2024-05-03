import useMode from "@/store/useMode";
import { getTime } from "@/utils/index";
import useStorage from "@/store/useStorage";
import { useState, useEffect } from "react";
import { Modal, Header } from "@/components/Molecules/index";
import { CountButton } from "@/components/Atom/index";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
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

const INITIAL = {
  second: 60,
};

export default function Measure() {
  const [measurement, setMeasurement] = useState(false);
  const [remainTime, setRemainTime] = useState(INITIAL.second);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const { darkmode } = useMode((state) => state);
  const { name } = useStorage((state) => state);

  useEffect(() => {
    let countId: number;
    if (!modal && measurement && remainTime > 0) {
      countId = setInterval(
        () => setRemainTime((remainTime) => remainTime - 1),
        1000,
      );
    } else if (remainTime === 0) {
      setMeasurement(false);
      setRemainTime(INITIAL.second);
      setModal(true);
    }
    return () => clearInterval(countId);
  }, [measurement, remainTime]);
  getTime();

  return (
    <div className="relative flex h-full flex-col items-center justify-between p-4">
      <Header />
      <div className="w-[75%] text-center ">
        <CircularProgressbarWithChildren
          counterClockwise={true}
          value={(remainTime / INITIAL.second) * 100}
          className="mb-8"
          styles={{
            path: {
              stroke: `${darkmode ? "rgba(232,228,228,44%)" : "rgba(255,255,255)"}`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 1s ease 0s",
              transform: "rotate",
              strokeWidth: 4,
            },
            trail: {
              stroke: `${darkmode ? "rgba(0,0,0)" : "rgba(0,0,0)"}`,
              strokeLinecap: "butt",
              strokeWidth: 4,
            },
          }}
        >
          <div className="flex h-full flex-col py-4 font-['TTLaundryGothicB']">
            <p className="text-lg">
              남은 시간{" "}
              <em className={`pl-1 ${darkmode ? "text-dark-txt-1" : ""}`}>
                {remainTime}
              </em>
            </p>
            <p className="flex h-[70%] items-center justify-center text-3xl">
              <strong
                className={`pr-4 text-8xl ${darkmode ? "text-dark-txt-1" : ""}`}
              >
                {count}
              </strong>
              회
            </p>
          </div>
        </CircularProgressbarWithChildren>
        {remainTime === INITIAL.second ? (
          <CountButton handleFn={() => setMeasurement((prev) => !prev)}>
            시작
          </CountButton>
        ) : (
          <CountButton handleFn={() => setCount((prev) => prev + 1)}>
            +1
          </CountButton>
        )}
      </div>
      <div
        className={`w-full justify-self-end text-center text-sm tracking-wider ${darkmode ? "text-white" : "text-black"}`}
      >
        <p>반려동물이 깊이 잠들었을 때 측정해주세요. </p>
        <p>가슴이나 배가 올라갔다 내려왔을 때 버튼을 눌러주세요.</p>
        <div
          className={`my-2 flex flex-col ${darkmode ? "text-dark-gray" : "text-gray-700"}`}
        >
          <p>해당 측정은 반려동물의 건강을 위한 참고용 데이터이며,</p>
          <p>정확한 검진을 위해서는 전문의와 상의하세요.</p>
        </div>
      </div>
      {modal ? (
        <Modal
          result={{ time: getTime(), name: name, counts: count }}
          closeFn={() => {
            setModal(false);
            setCount(0);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
