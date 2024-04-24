import { Input, ModeButton } from "@/components/Atom/index";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useStorage from "@/store/useStorage";
import useMode from "@/store/useMode";

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
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132,0.5)",
      },
    ],
  };
  const options = {
    // responsive: true,
    scales: {
      x: {
        ticks: {
          callback: function (val): string {
            console.log(this);
            const label = this.getLabelForValue(val);
            return label.slice(0, label.search(" "));
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
      <div className="flex w-full justify-between">
        <Input />
        <ModeButton />
      </div>

      <Line data={data} options={options} />

      <div
        className={`flex w-full flex-grow flex-col justify-end justify-self-end text-center text-sm tracking-wider ${darkmode ? "text-white" : "text-black"}`}
      >
        <p>연속성 있는 기록을 위해 </p>
        <span>같은 브라우저 환경에서 접속해주세요.</span>
        <p>반려동물의 호흡수는 30회를 넘지 않아야합니다. </p>
        <p>호흡수 기록이 변화하는 양상이라면,</p>
        <p> 주치의와 자세한 상담이 필요합니다.</p>
      </div>
    </div>
  );
}
