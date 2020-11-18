import React from "react";
import "./card.scss";
import { PropsFromParents } from "./model";

const Card = (props: PropsFromParents) => {
  return (
    <div className={"cardContainer"} id={`${props.index}`}>
      <div className={"imageWrapper"}>
        <img alt="" src={`./${props.item.imageUrl}`} />
      </div>
      <div className={"textsContainer"}>
        <div className={"title"}>{props.item.title}</div>
        <div className={"description"}>{props.item.description}</div>
        <div className={"tagsContainer"}>
          {props.item.tags.map((item: any, index: number) => {
            return (
              <span key={index} className={"tagsWrapper"}>
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
