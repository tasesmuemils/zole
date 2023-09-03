"use client";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";
import Switcher from "../Switcher";
import { ImBin, ImSpades, ImClubs, ImPlus } from "react-icons/im";

export default function About() {
  const [isLoading, setIsLoading] = useState(false);
  const [oldGame, setOldGame] = useState(null);

  // Navigate to page after submit
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    router.push("/gameData");
  };

  const handleToStartClick = () => {
    setIsLoading(true);
    router.push("/");
  };

  useEffect(() => {
    setOldGame(JSON.parse(localStorage.getItem("players")));
  }, []);

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  return (
    <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex relative min-h-screen flex-col items-center justify-between px-5 py-24">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <div className="mb-5">
              <div className="py-2">
                <h1 className="text-lg font-semibold">Par aplikāciju</h1>
              </div>
              <p>
                Aplikācija ir izveidota, lai pirms kārtējā zoles vakara nav
                jāskrien un jāmeklē papīrs un rakstāmais. Punktus var skaitīt
                tieši šeit
              </p>
            </div>
            <div className="mt-2 mb-5">
              <div className="py-2">
                <h2 className="text-lg font-semibold">Funkcionalitāte</h2>
              </div>
              <div>
                <p>
                  Sākumlapā lapā var izvēlēties spēlētāju skaitu ("3" vai "4").
                </p>
                <div className="my-3">
                  <div className="flex flex-row items-center py-4">
                    <button className="px-3 py-4 flex justify-center items-center bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none rounded-r-lg">
                      <svg width="23" height="18" viewBox="0 0 23 23">
                        <path
                          className="stroke-slate-500 dark:stroke-white"
                          fill="transparent"
                          strokeWidth="3"
                          strokeLinecap="round"
                          d="M 2 2.5 L 20 2.5"
                        ></path>
                        <path
                          className="stroke-slate-500 dark:stroke-white"
                          fill="transparent"
                          strokeWidth="3"
                          strokeLinecap="round"
                          d="M 2 9.423 L 20 9.423"
                        ></path>
                        <path
                          className="stroke-slate-500 dark:stroke-white"
                          fill="transparent"
                          strokeWidth="3"
                          strokeLinecap="round"
                          d="M 2 16.346 L 20 16.346"
                        ></path>
                      </svg>
                    </button>
                    <p className="pl-3">
                      Izvēlnes poga ir pieejama no jebkuras vietas aplikācijā.
                    </p>
                  </div>
                  <div>
                    <p>Izvēlnes poga piedāvā vairākas opcijas:</p>
                    <ul>
                      <li className="flex flex-row items-center py-4">
                        <Switcher />
                        <p className="pl-3">
                          Var pārslēgt no gaišās tēmas("light mode") uz tumšo
                          tēmu ("dark mode")
                        </p>
                      </li>
                      <li className="flex flex-row items-center py-4">
                        <button className="rounded-lg text-base leading-6 font-semibold px-5 py-1 my-2 ring-2 ring-inset hover:bg-cyan-500  hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500">
                          Punktu tabula
                        </button>
                        <p className="pl-3">
                          Ļauj apskatīties tabulu, kā tiek skaitīti "Zoles"
                          punkti
                        </p>
                      </li>
                      <li className="flex flex-row items-center py-4">
                        <button className="rounded-lg text-base leading-6 font-semibold px-5 py-1 ring-2 ring-inset hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500">
                          Par aplikāciju
                        </button>
                        <p className="pl-3">Iepazīsties ar aplikāciju</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="pb-3">
                  Tālāk jaievada spēlētāju vārdi un katram spēlētājam jāizvēlās
                  ikona, kas attēlosies punktu tabulā
                </p>
                <div>
                  <p className="pb-3">
                    Spēles skatā ir pieejama punktu tabula un vairākas opcijas:
                  </p>
                  <ul>
                    <li className="flex flex-row items-center py-4">
                      <button className="bg-slate-50 text-gray-500 dark:bg-slate-600 transition-all duration-500 dark:text-slate-200 px-4 py-4 rounded-lg flex justify-center">
                        <ImPlus />
                      </button>
                      <p className="pl-3">
                        Atver "Punktu ievades" skatus, kur jāizvēlās spēles
                        veids un scenārijs kā tika izspēlēta pēdējā partija
                      </p>
                    </li>
                    <li className="flex flex-row items-center py-4">
                      <button className="flex justify-center items-center bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none w-[50px] h-[50px] rounded-r-lg">
                        <ImSpades className="text-slate-500 dark:text-slate-100" />
                      </button>
                      <p className="pl-3">Sākt jaunu spēli</p>
                    </li>
                    <li className="flex flex-row items-center py-4">
                      <button className="flex justify-center items-center bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none w-[50px] h-[50px] rounded-r-lg">
                        <ImBin className="text-slate-500 dark:text-slate-100" />
                      </button>
                      <p className="pl-3">Dzēst pēdējo ievadīto rezultātu</p>
                    </li>
                    <li className="flex flex-row items-center py-4">
                      <div className="flex justify-center items-center flex-col bg-slate-100 transition-all duration-500 dark:bg-cyan-500 border-0 outline-none focus:outline-none w-[50px] h-[50px] rounded-r-lg">
                        <ImClubs className="text-slate-500 dark:text-slate-100 w-1/5" />
                        <p className="text-slate-500 dark:text-slate-100">4</p>
                      </div>
                      <p className="pl-3">Izspēlētais partiju skaits</p>
                    </li>
                  </ul>
                </div>
                <p>
                  Ja ir piemirsies, kura ikona bija kuram spēlētājam, uzspiežot
                  uz ikonām tabulas augšā, atvērsies saraksts ar ikonām un kuram
                  spēlētājam pieder konkrētā ikona
                </p>
              </div>
            </div>
            <div className="mt-2 mb-5">
              <div className="py-2">
                <h2 className="text-lg font-semibold">PWA</h2>
              </div>
              <p>
                Aplikācija ir uzbūvēta kā PWA ("Progressive web app"). Tas
                nozīmē, ka aplikācija ir būvēta ar web tehnoloģijām, bet to ir
                iespējams uzlikt kā aplikāciju uz jebkuras ierīces. Tas padara
                "Zoles" punktu skaitīšanu daudz ērtāku, jo saiti var pievienot
                kā aplikāciju uz telefona, planšetes vai datora. Īsas
                instrukcijas kā pievienot PWA kā aplikāciju dažādām ierīcēm var
                atrast{" "}
                <a
                  className="text-xl text-cyan-500 underline"
                  target="_blank"
                  href="https://www.cdc.gov/niosh/mining/content/hearingloss/installPWA.html"
                  rel="noopener noreferrer"
                >
                  šeit
                </a>
              </p>
            </div>
            <div className="mt-2 mb-5">
              <p>
                Aplikāciju uzbūvēja Emīls Bisenieks. Atsauksmes, ieteikumus un
                kļūdas sūtiet e-pastā: emils.bisenieks93@gmail.com
              </p>
            </div>
          </div>

          {oldGame != null ? (
            <div className="p-2 fixed bottom-0 left-0 bg-slate-100 dark:bg-cyan-500 w-full">
              <button
                style={spring}
                onClick={handleClick}
                className="rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
              >
                Atsākt iepriekšējo spēli
              </button>
            </div>
          ) : (
            <div className="p-2 fixed bottom-0 left-0 bg-slate-100 dark:bg-cyan-500 w-full">
              <button
                style={spring}
                onClick={handleToStartClick}
                className="rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-inset dark:bg-slate-500"
              >
                Uz sākumu
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
