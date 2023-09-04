import { scoreTable } from "../gameData/scoreTable";

export default function PunktuTabula() {
  return (
    <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex relative flex-col items-center p-10">
      <div>
        <h1>Punktu tabula</h1>
      </div>
      <div>
        <h2>"Lielais"</h2>
        <div className="grid grid-cols-[40%_20%_20%_20%]">
          <div>
            <div>Scenārijs</div>
            {Object.keys(scoreTable["Lielais"]).map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <div>
            <div>Lielajam</div>
            {Object.keys(scoreTable["Lielais"]).map((item) => (
              <div>{scoreTable["Lielais"][item][3]["Lielajam"]}</div>
            ))}
          </div>
          <div>
            <div>1.mazajam</div>
            {Object.keys(scoreTable["Lielais"]).map((item) => (
              <div>{scoreTable["Lielais"][item][3]["1.mazajam"]}</div>
            ))}
          </div>
          <div>
            <div>2.mazajam</div>
            {Object.keys(scoreTable["Lielais"]).map((item) => (
              <div>{scoreTable["Lielais"][item][3]["2.mazajam"]}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
