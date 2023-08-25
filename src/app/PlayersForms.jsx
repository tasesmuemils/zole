"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Select, { components } from "react-select";
import { ImBin, ImSpades, ImClubs } from "react-icons/im";
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
    console.log("From SUBMIT", selectedAvatar);
    setError(false);
    setIsLoading(true);

    console.log(
      e.target[0].value,
      // e.target[1].value,
      e.target[2].value,
      e.target[4].value
    );

    if (
      e.target[0].value.length == 0 ||
      e.target[2].value.length == 0 ||
      e.target[4].value.length == 0 ||
      (e.target[6].tagName != "BUTTON" && e.target[6].value.length == 0)
    ) {
      setError(true);
      return;
    }
    // Captures all input values
    const playersList = [
      { player: e.target[0].value, icon: selectedAvatar[0], score: [] },
      { player: e.target[2].value, icon: selectedAvatar[1], score: [] },
      { player: e.target[4].value, icon: selectedAvatar[2], score: [] },
    ];

    console.log(selectedAvatar[0].value);
    console.log(playersList);
    e.target[6].tagName != "BUTTON" &&
      playersList.push({
        player: e.target[6].value,
        icon: selectedAvatar[3],
        score: [],
      });

    console.log(playersList);
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
        console.log("selectedAvatar", item);
        console.log(Array.isArray(e), e);
        if (selectedAvatar.indexOf(item) === no) {
          return e;
        } else {
          console.log("TEST", item);
          return item;
        }
      })
    );
  };

  // const Option = (props) => (
  //   <components.Option
  //     {...props}
  //     className="bg-white transition-all duration-500 dark:bg-slate-800"
  //   >
  //     {props.data.icon}
  //   </components.Option>
  // );

  // const SingleValue = ({ children, ...props }) => (
  //   <components.SingleValue {...props}>
  //     {selectedAvatar[0].icon}
  //   </components.SingleValue>
  // );

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
                options={avatarIcons}
                onChange={(event) => handleChange(event, 0)}
                placeholder="Izvēlies ikonu..."
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
                options={avatarIcons}
                onChange={(event) => handleChange(event, 1)}
                placeholder="Izvēlies ikonu..."
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
                options={avatarIcons}
                onChange={(event) => handleChange(event, 2)}
                placeholder="Izvēlies ikonu..."
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
                  options={avatarIcons}
                  onChange={(event) => handleChange(event, 3)}
                  placeholder="Izvēlies ikonu..."
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

const InputSelect = ({ selectName, selectValue }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleChange = (value) => {
    setSelectedAvatar(value);
    // selectValue(value);
  };

  console.log(selectedAvatar);

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {selectedAvatar.icon}
    </components.SingleValue>
  );

  // Pass to parent
  if (selectedAvatar) {
    selectValue(selectedAvatar);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <CustomInput />
      <Select
        classNames={{
          control: () =>
            "bg-white transition-all duration-500 dark:bg-slate-800",
        }}
        name={selectName}
        value={Option.filter((obj) =>
          selectedAvatar[0].value.includes(obj.value)
        )}
        options={avatarIcons}
        onChange={(event) => handleChange(event, 0)}
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
        }}
        components={{
          Option,
          // SingleValue,
        }}
      />
    </div>
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
];
