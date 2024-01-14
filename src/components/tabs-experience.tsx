import { css } from "styled-system/css";
import { HistoryList } from "./history-list";
import { useEffect, useState } from "react";
import Index from "src/pages/index.astro";

type Props = {};
const EXPERIENCE_INFO_CONTAINER = css({
  display: "flex",
  flexDir: "column",
  md: {
    flexDir: "column",
  },
});

const EXPERIENCE_INFO_OPTIONS_CONTAINER = css({
  display: "flex",
  flexDir: "column",
  md: {
    flexDir: "row",
  },
  mt: "32px",
  borderRadius: "10px",
  background: "linear-gradient(145deg, #e2e8ec, #ffffff)",
  boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
});

const OPTION_CONTAINER = css({
  padding: "30px 10px",
  boxSizing: "border-box",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  cursor: "pointer",
  flex: "1",
  flexWrap: "wrap",
  transition: "color 0.5s",
  fontFamily: "primary",
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: 500,

  _hover: {},
  md: {
    flexDir: "row",
  },
  "&:checked": {
    color: "red",
    background: "linear-gradient(145deg, #e2e8ec, #ffffff)",
    boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
    borderRadius: "10px",
    fontWeight: 600,
  },
});

const EXPERIENCE_INFO_HISTORY_CONTAINER = css({
  display: "flex",
  flexDir: "column",
  columnGap: "32px",
  mt: "40px",
  transition: "all .5s",
  md: {
    flexDir: "row",
  },
});

type TabOption = {
    id: string, 
    value: string,
    checked: boolean
}

const options: TabOption[] = [
  {
    id: "estudios",
    value: "Estudios",
    checked: true
  },
  {
    id: "trabajo",
    value: "Trabajos",
    checked: false
  },
  {
    id: "experiencia",
    value: "Experiencia",
    checked: false
  },
];
export const TabsExperience: React.FC<Props> = () => {
    const [currentOptions, setOptions] = useState<TabOption[]>(options)

  const onClick = (id: string) => {
    const newList: TabOption[] = currentOptions.map(it => {
        if(it.id === id){
            return {...it, checked: true}
        }
        return {...it, checked: false}
    })
    setOptions(newList)
  };

  return (
    <section className={EXPERIENCE_INFO_CONTAINER}>
      <article className={EXPERIENCE_INFO_OPTIONS_CONTAINER}>
        {currentOptions.map((it) => (
          <div  key={it.id} style={{width: "100%"}}>
            <label
              htmlFor={it.id}
              className={OPTION_CONTAINER}
            >
              {it.value}
            </label>
              
            <input type="radio"  id={it.id} name="select"  checked={it.checked} hidden onChange={() => onClick(it.id) } />
          </div>
        ))}
      </article>
      <section id="options-containers">
        {
          <article className={EXPERIENCE_INFO_HISTORY_CONTAINER}>
            <HistoryList
              title="Education"
              interval="2020-2024"
              items={[
                {
                  title: "Preparatoria numero 2, UADY.",
                  description: "3 años en",
                },
                {
                  title: "Instituto tecnologico de merida",
                  description: "3 años en",
                },
              ]}
            />
          </article>
        }

        {
          <article className={EXPERIENCE_INFO_HISTORY_CONTAINER}>
            <HistoryList
              title="Trabajo"
              interval="2020-2024"
              items={[
                {
                  title: "Itnovare solutions",
                  job: "Desarrollador de software",
                  description:
                    "Trabaje en la creacion de su aplicacion con tecnologias como react native y python.",
                },
              ]}
            />
          </article>
        }

        {
          <article className={EXPERIENCE_INFO_HISTORY_CONTAINER}>
            <HistoryList
              title="Experiencia"
              interval=""
              items={[
                {
                  title: "Mi primera chamba",
                  description: "dfsdfdsfsdfsdzdgdf<dszxfgzfsbx",
                },
              ]}
            />
          </article>
        }
      </section>
    </section>
  );
};
