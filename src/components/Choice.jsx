export default function Choice({ text, img, click }) {
  return (
    <div
      onClick={click}
      className="flex flex-col gap-4 items-center rounded-lg p-4 transition hover:bg-base-300 cursor-pointer"
    >
      <img
        src={img}
        alt="Arrow"
        width={60}
        height={60}
        style={{ width: 60, height: 60 }}
      />
      <p className="text-lg font-bold text-center text-base-content w-40 c">
        {text}
      </p>
    </div>
  );
}
