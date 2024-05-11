import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ChartOptions,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useStorage from "@/store/useStorage";
import useMode from "@/store/useMode";
import { Header } from "@/components/Molecules/index";
import { CountButton } from "@/components/Atom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function Record() {
  const record = useStorage((state) => state.record);
  const name = useStorage((state) => state.name);
  const clearRecord = useStorage((state) => state.clearRecord);
  const darkmode = useMode((state) => state.darkmode);
  const labels: string[] = [];
  const countsArr: number[] = [];
  record.map(({ dateTime, counts }) => {
    if (typeof dateTime === "string") labels.push(dateTime);
    if (typeof counts === "number") countsArr.push(counts);
  });
  const data = {
    labels,
    datasets: [
      {
        data: countsArr,
        borderColor: "rgb(232, 228, 228)",
        backgroundColor: "rgb(255, 255, 255)",
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        ticks: {
          callback: function (val) {
            if (typeof val === "number") {
              const label = this.getLabelForValue(val);
              return label.slice(0, label.search(" "));
            }
          },
        },
      },
      y: {
        min: 0,
        max: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${name}의 분당 호흡수`,
      },
    },
  };
  return (
    <div className="flex h-full flex-col items-center justify-between gap-12 p-4">
      <Header />
      <div className="flex w-full flex-col items-center">
        <Line data={data} options={options} />

        <ul
          className={`pb-12 pt-4 text-center text-sm  ${darkmode ? "text-dark-txt-1" : "text-black"}`}
        >
          <li className="pb-3 text-white">
            클릭시 측정 시간과 호흡수를 확인할 수 있습니다.
          </li>
          <li>반려동물의 호흡수는 30회를 넘지 않아야합니다. </li>
          <li className="text-balance">
            기록이 한 방향으로 변화하는 양상이라면, 주치의와의 자세한 상담이
            필요합니다.
          </li>
        </ul>
        <CountButton handleFn={clearRecord}>초기화</CountButton>
      </div>
      <div
        className={`text-md flex w-full flex-grow flex-col justify-end justify-self-end text-pretty px-10 text-center tracking-wider ${darkmode ? "text-dark-txt-1" : "text-black"}`}
      >
        <p>연속성 있는 기록을 위해 같은 브라우저 환경에서 접속해주세요.</p>
      </div>
    </div>
  );
}
