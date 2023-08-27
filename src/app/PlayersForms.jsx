"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Select, { components } from "react-select";
import {
  ImBin,
  ImSpades,
  ImClubs,
  ImPacman,
  ImPaintFormat,
  ImVideoCamera,
  ImMusic,
  ImBug,
  ImHappy,
  ImEvil,
  ImTux,
  ImAndroid,
  ImTwitter,
  ImSleepy,
  ImCool,
  ImPowerCord,
  ImBullhorn,
  ImHipster,
} from "react-icons/im";
import Spinner from "./Spinner";
import { clsx } from "clsx";

export default function PlayersForm(props) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState([
    { value: [] },
    { value: [] },
    { value: [] },
    props.number == 4 && { value: [] },
  ]);

  // Navigate to page after submit
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const iconFillCheck = selectedAvatar.every(
      (item) => Object.keys(item).length > 1 || item == false
    );
    console.log("check", iconFillCheck);

    console.log(
      e.target[0].value.length,
      e.target[2].value.length,
      e.target[4].value.length,
      e.target[6].tagName
    );

    if (
      e.target[0].value.length == 0 ||
      e.target[2].value.length == 0 ||
      e.target[4].value.length == 0 ||
      (e.target[6].tagName != "BUTTON" && e.target[6].value.length == 0) ||
      !iconFillCheck
    ) {
      setError(true);
      return;
    }

    setIsLoading(true);
    // Captures all input values
    const playersList = [
      { player: e.target[0].value, icon: selectedAvatar[0], score: [] },
      { player: e.target[2].value, icon: selectedAvatar[1], score: [] },
      { player: e.target[4].value, icon: selectedAvatar[2], score: [] },
    ];

    e.target[6].tagName != "BUTTON" &&
      playersList.push({
        player: e.target[6].value,
        icon: selectedAvatar[3],
        score: [],
      });

    // Sets values to local storage
    localStorage.removeItem("players");
    localStorage.setItem("players", JSON.stringify(playersList));
    router.push("/gameData");
  };

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 100 },
  });

  // handle onChange event of the dropdown
  const handleChange = (e, no) => {
    setSelectedAvatar(
      selectedAvatar.map((item) => {
        if (selectedAvatar.indexOf(item) === no) {
          return e;
        } else {
          return item;
        }
      })
    );
  };

  console.log(selectedAvatar);

  return (
    <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex flex-col justify-center items-center min-h-screen p-24">
      {isLoading ? (
        <Spinner />
      ) : (
        <animated.form
          style={spring}
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-bold text-slate-500 transition-all duration-500 dark:text-slate-200">
            Ievadi spēlētāju vārdus un izvēlies ikonu
          </h2>
          <div className="flex flex-col m-4">
            <div>
              <CustomInput />
              <Select
                classNames={{
                  control: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  MenuList: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  option: ({ isFocused, isSelected }) =>
                    clsx(
                      isFocused &&
                        "active:bg-gray-200 bg-white  transition-all duration-500 dark:bg-slate-800",
                      isSelected &&
                        "bg-white transition-all duration-500 dark:bg-slate-800",
                      "hover:cursor-pointer bg-white transition-all duration-500 dark:bg-slate-800"
                    ),
                  menu: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  singleValue: () =>
                    "text-slate-200 bg-white transition-all duration-500 dark:bg-slate-800",
                  valueContainer: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  placeholder: () => "text-slate-500 dark:text-slate-200",
                }}
                options={avatarIcons.filter(
                  (icon) =>
                    icon.key !=
                    selectedAvatar
                      .map((stateIcon) => stateIcon.key)
                      .filter((key) => key == icon.key)
                )}
                onChange={(event) => handleChange(event, 0)}
                placeholder="Izvēlies ikonu..."
                isSearchable={false}
              />
            </div>
            <div>
              <CustomInput />
              <Select
                classNames={{
                  control: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  MenuList: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  option: ({ isFocused, isSelected }) =>
                    clsx(
                      isFocused &&
                        "active:bg-gray-200 bg-white transition-all duration-500 dark:bg-slate-800",
                      isSelected &&
                        "bg-white transition-all duration-500 dark:bg-slate-800",
                      "hover:cursor-pointer bg-white transition-all duration-500 dark:bg-slate-800"
                    ),
                  menu: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  singleValue: () =>
                    "text-slate-200 bg-white transition-all duration-500 dark:bg-slate-800",
                  valueContainer: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  placeholder: () => "text-slate-500 dark:text-slate-200",
                }}
                options={avatarIcons.filter(
                  (icon) =>
                    icon.key !=
                    selectedAvatar
                      .map((stateIcon) => stateIcon.key)
                      .filter((key) => key == icon.key)
                )}
                onChange={(event) => handleChange(event, 1)}
                placeholder="Izvēlies ikonu..."
                isSearchable={false}
              />
            </div>
            <div>
              <CustomInput />
              <Select
                classNames={{
                  control: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  MenuList: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  option: ({ isFocused, isSelected }) =>
                    clsx(
                      isFocused &&
                        "bg-white transition-all duration-500 dark:bg-slate-800",
                      isSelected &&
                        "bg-white transition-all duration-500 dark:bg-slate-800",
                      "hover:cursor-pointer bg-white transition-all duration-500 dark:bg-slate-800"
                    ),
                  menu: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  singleValue: () =>
                    "text-slate-200 bg-white transition-all duration-500 dark:bg-slate-800",
                  valueContainer: () =>
                    "bg-white transition-all duration-500 dark:bg-slate-800",
                  placeholder: () => "text-slate-500 dark:text-slate-200",
                }}
                options={avatarIcons.filter(
                  (icon) =>
                    icon.key !=
                    selectedAvatar
                      .map((stateIcon) => stateIcon.key)
                      .filter((key) => key == icon.key)
                )}
                onChange={(event) => handleChange(event, 2)}
                placeholder="Izvēlies ikonu..."
                isSearchable={false}
              />
            </div>

            {props.number == 4 ? (
              <div>
                <CustomInput />
                <Select
                  classNames={{
                    control: () =>
                      "bg-white transition-all duration-500 dark:bg-slate-800",
                    MenuList: () =>
                      "bg-white transition-all duration-500 dark:bg-slate-800",
                    option: ({ isFocused, isSelected }) =>
                      clsx(
                        isFocused &&
                          "bg-white transition-all duration-500 dark:bg-slate-800",
                        isSelected &&
                          "bg-white transition-all duration-500 dark:bg-slate-800",
                        "hover:cursor-pointer bg-white transition-all duration-500 dark:bg-slate-800"
                      ),
                    menu: () =>
                      "bg-white transition-all duration-500 dark:bg-slate-800",
                    singleValue: () =>
                      "text-slate-200 bg-white transition-all duration-500 dark:bg-slate-800",
                    valueContainer: () =>
                      "bg-white transition-all duration-500 dark:bg-slate-800",
                    placeholder: () => "text-slate-500 dark:text-slate-200",
                  }}
                  options={avatarIcons.filter(
                    (icon) =>
                      icon.key !=
                      selectedAvatar
                        .map((stateIcon) => stateIcon.key)
                        .filter((key) => key == icon.key)
                  )}
                  onChange={(event) => handleChange(event, 3)}
                  placeholder="Izvēlies ikonu..."
                  isSearchable={false}
                />
              </div>
            ) : null}
          </div>

          <div className="flex flex-col py-2">
            <button
              className="grow rounded-lg text-base leading-6 font-semibold px-5 py-1 m-2 ring-2 ring-inset hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:ring-cyan-500 hover:text-slate-50 ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-inset transition-all duration-500 dark:bg-slate-500"
              type="submit"
            >
              Sākt spēli
            </button>
            {error && (
              <animated.p
                style={spring}
                className="text-xs font-semibold  text-red-500"
              >
                Vārdu ievadi visiem spēlētājiem
              </animated.p>
            )}
          </div>
        </animated.form>
      )}
    </main>
  );
}

const CustomInput = () => {
  return (
    <input
      style={{ WebkitAppearance: "none" }}
      className="caret-cyan-500 border-b-2 border-cyan-500 m-2 py-1 px-2 text-center bg-white transition-colors duration-500 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring focus:ring-cyan-500 focus:rounded-md"
      type="text"
    />
  );
};

export const avatarIcons = [
  {
    value: <ImBin className="text-slate-500 dark:text-slate-200" />,
    label: <ImBin className="text-slate-500 dark:text-slate-200" />,
    key: "ImBin",
  },
  {
    value: <ImSpades className="text-slate-500 dark:text-slate-200" />,
    label: <ImSpades className="text-slate-500 dark:text-slate-200" />,
    key: "ImSpades",
  },
  {
    value: <ImClubs className="text-slate-500 dark:text-slate-200" />,
    label: <ImClubs className="text-slate-500 dark:text-slate-200" />,
    key: "ImClubs",
  },
  {
    value: <ImPacman className="text-slate-500 dark:text-slate-200" />,
    label: <ImPacman className="text-slate-500 dark:text-slate-200" />,
    key: "ImPacman",
  },
  {
    value: <ImPaintFormat className="text-slate-500 dark:text-slate-200" />,
    label: <ImPaintFormat className="text-slate-500 dark:text-slate-200" />,
    key: "ImPaintFormat",
  },
  {
    value: <ImVideoCamera className="text-slate-500 dark:text-slate-200" />,
    label: <ImVideoCamera className="text-slate-500 dark:text-slate-200" />,
    key: "ImVideoCamera",
  },
  {
    value: <ImMusic className="text-slate-500 dark:text-slate-200" />,
    label: <ImMusic className="text-slate-500 dark:text-slate-200" />,
    key: "ImMusic",
  },
  {
    value: <ImBug className="text-slate-500 dark:text-slate-200" />,
    label: <ImBug className="text-slate-500 dark:text-slate-200" />,
    key: "ImBug",
  },
  {
    value: <ImHappy className="text-slate-500 dark:text-slate-200" />,
    label: <ImHappy className="text-slate-500 dark:text-slate-200" />,
    key: "ImHappy",
  },
  {
    value: <ImEvil className="text-slate-500 dark:text-slate-200" />,
    label: <ImEvil className="text-slate-500 dark:text-slate-200" />,
    key: "ImEvil",
  },
  {
    value: <ImTux className="text-slate-500 dark:text-slate-200" />,
    label: <ImTux className="text-slate-500 dark:text-slate-200" />,
    key: "ImTux",
  },
  {
    value: <ImAndroid className="text-slate-500 dark:text-slate-200" />,
    label: <ImAndroid className="text-slate-500 dark:text-slate-200" />,
    key: "ImAndroid",
  },
  {
    value: <ImTwitter className="text-slate-500 dark:text-slate-200" />,
    label: <ImTwitter className="text-slate-500 dark:text-slate-200" />,
    key: "ImTwitter",
  },
  {
    value: <ImSleepy className="text-slate-500 dark:text-slate-200" />,
    label: <ImSleepy className="text-slate-500 dark:text-slate-200" />,
    key: "ImSleepy",
  },
  {
    value: <ImCool className="text-slate-500 dark:text-slate-200" />,
    label: <ImCool className="text-slate-500 dark:text-slate-200" />,
    key: "ImCool",
  },
  {
    value: <ImPowerCord className="text-slate-500 dark:text-slate-200" />,
    label: <ImPowerCord className="text-slate-500 dark:text-slate-200" />,
    key: "ImPowerCord",
  },
  {
    value: <ImBullhorn className="text-slate-500 dark:text-slate-200" />,
    label: <ImBullhorn className="text-slate-500 dark:text-slate-200" />,
    key: "ImBullhorn",
  },
  {
    value: <ImHipster className="text-slate-500 dark:text-slate-200" />,
    label: <ImHipster className="text-slate-500 dark:text-slate-200" />,
    key: "ImHipster",
  },
];
