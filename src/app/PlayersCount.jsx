"use client";

export default function PlayersCount(props) {
  const handleClick = () => {
    props.setPlayersCount(props.number);
  };
  return (
    <div>
      <button
        aria-label={`palyer-count-${props.number}`}
        className="grow rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
        onClick={handleClick}
      >
        {props.number}
      </button>
    </div>
  );
}
