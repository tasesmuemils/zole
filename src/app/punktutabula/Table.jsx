import { scoreTable } from "../gameData/scoreTable";

export default function Table({ gameType, playerCount }) {
  return (
    <div className="w-full mt-5 mb-10">
      <h2 className="text-center text-lg p-5 font-semibold">{gameType}</h2>
      <div>
        <div className="flex flex-col justify-center">
          <div
            className={`grid grid-cols-${
              !playerCount ? "[40%_20%_20%_20%]" : "[40%_15%_15%_15%_15%]"
            } border-b pb-1`}
            // className="grid grid-cols-[40%_15%_15%_15%_15%]"
          >
            <p>Scenārijs</p>
            <p className="text-center">L</p>
            <p className="text-center">1.</p>
            <p className="text-center">2.</p>
            {playerCount && <p className="text-center">3.</p>}
          </div>
          {Object.keys(scoreTable[gameType]).map((item, index) => (
            <div
              key={`${item}Table${index}`}
              className={`grid grid-cols-${
                !playerCount ? "[40%_20%_20%_20%]" : "[40%_15%_15%_15%_15%]"
              } items-center border-b py-2`}
            >
              <div>{item}</div>
              <div className="text-center">
                {scoreTable[gameType][item][!playerCount ? 3 : 4]["Lielajam"]}
              </div>
              <div className="text-center">
                {scoreTable[gameType][item][!playerCount ? 3 : 4]["1.mazajam"]}
              </div>
              <div className="text-center">
                {scoreTable[gameType][item][!playerCount ? 3 : 4]["2.mazajam"]}
              </div>
              {playerCount && (
                <div className="text-center">
                  {
                    scoreTable[gameType][item][!playerCount ? 3 : 4][
                      "3.mazajam"
                    ]
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
