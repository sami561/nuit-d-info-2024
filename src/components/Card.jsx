export default function Card({ text, img }) {
  return (
    <div className="flex flex-col bg-white rounded-xl w-80 h-96 justify-center shadow-primary/100">
      <div className="flex flex-col gap-10 items-center grow justify-center">
        <img
          src={img}
          alt="Card Image"
          className="w-50 h-50 rounded-sm"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            width: "200px",
            height: "200px",
          }}
        />
        <p
          className="text-primary-content text-xs font-bold text-center select-none p-4"
          style={{ color: "#1b1b1b" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
