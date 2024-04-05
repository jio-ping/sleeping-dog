import { useState, useEffect } from "react";

/*
1. 시작버튼 터치시 
  버튼 텍스트 변경
  초 단위로 시간 시간 단축 
2. 터치 버튼 클릭시 카운트 추가

*/

export default function Record() {
  const [measurement, setMeasurement] = useState(false);
  const [remainTime, setRemainTime] = useState(60);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let countId: string | number | NodeJS.Timeout | undefined;
    if (measurement && remainTime > 0) {
      countId = setInterval(
        () => setRemainTime((remainTime) => remainTime - 1),
        1000
      );
    } else if (remainTime === 0) {
      setMeasurement(false);
      setRemainTime(10);
    }
    return () => clearInterval(countId);
  }, [measurement, remainTime]);

  return (
    <>
      <input type="text" placeholder="강아지이름" />
      <button>모드변경</button>
      <div>
        <p>
          남은 시간 <em>{remainTime}</em> 초
        </p>
        <p>
          <em>{count}</em>회
        </p>
      </div>
      <button className="p-5" onClick={() => setMeasurement((prev) => !prev)}>
        {measurement ? "멈춤" : "시작"}
      </button>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
    </>
  );
}
