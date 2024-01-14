import React, { Children } from "react";
import { css } from "styled-system/css";

type Props = {
} & HistoryContainerInfo;

type HistoryContainerInfo = {
  title: string;
  interval: string;
  items: HistoryInfo[];
};

export type HistoryInfo = {
  title: string;
  description: string;
  job?: string,
};

const HISTORY_LIST_CONTAINER = css({
  display: "flex",
  flexDir: "column",
  width: "100%",
  position: "relative",
  boxSizing: "border-box",
});

const HISTORY_LIST_INTERVAL = css({
  fontSize: "14px",
  letterSpacing: "2px",
  fontWeight: 500,
  color: "#f9004d",
  mb: "4px"
});

const HISTORY_LIST_TITLE = css({
  fontSize: "36px",
  fontWeight: 700,
  lineHeight: "62px",
  mb: "32px"
});

const LIST_CONTAINER = css({
  borderLeft: "5px solid #d9dee2",
  display: "flex",
  flexDir: "column",
  rowGap: "32px",
  position: "relative",
  zIndex: 0,
});

const HISTORY_LIST_ITEM_CONTAINER = css({
  padding: "45px 40px",
  boxSizing: "border-box",
  borderRadius: "6px",
  marginLeft: "32px",
  position: "relative",

  backgroundColor: "linear-gradient(145deg, #e2e8ec, #ffffff)",
  boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",

  _hover: {
    _before: {
      background: "red",
    },
  },
  _after: {
    content: '""',
    boxSizing: "border-box",
    position: "absolute",
    width: "32px",
    height: "3px",
    background: "#d9dee2",
    top: 16,
    left: "-32px",
    zIndex: 1,
  },
  _before: {
    content: '""',
    boxSizing: "border-box",
    position: "absolute",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#ecf0f3",
    top: "56px",
    left: "-44px",
    transition: "background .5s ease-in",
    border: "5px solid #d9dee2",
    zIndex: 2,
  },
});

export const HistoryList: React.FC<Props> = ({ title, items, interval }) => {

  return (
    <section className={HISTORY_LIST_CONTAINER}>
       <h3 className={HISTORY_LIST_INTERVAL}>{interval}</h3>
      <h3 className={HISTORY_LIST_TITLE}>{title}</h3>
      <div className={LIST_CONTAINER}>
        {items.map((item) => (
          <article className={HISTORY_LIST_ITEM_CONTAINER}>
            <h3>{item.title}</h3>
            <span>{item.job}</span>
            <p>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
