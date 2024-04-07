export default function Modal() {
  return (
    <div className="w-[80%] h-[169px] text-white bg-black border rounded-[3px] flex flex-col justify-center items-center ">
      <div className="px-[77px] text-center py-[30px]">
        <h3 className="text-[30px]">정상이에요!</h3>
        <p>2024.04.06 18:30 꽁이 20회/분</p>
      </div>
      <div className="flex-grow w-full flex  border-t border-white ">
        <button className="flex-grow border-r border-white py-[7px]">
          닫기 🖐️
        </button>
        <button className="flex-grow py-[7px]">기록 📝</button>
      </div>
    </div>
  );
}
