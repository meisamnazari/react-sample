import React from "react";
import { shallow } from "enzyme";
import Card from "../card/card";

let item = {
  id: "109d23ad-8b95-4a9d-afdf-46ef35b1b2cc",
  title: "Birdemic: Shock and Terror",
  year: "2010",
  imageUrl: "img/bird.jpeg",
  description:
    "A horde of mutated birds descends upon the quiet town of Half Moon Bay, California. With the death toll rising, Two citizens manage to fight back, but will they survive Birdemic?",
  tags: [
    {
      id: "077bcbb8-1f7d-407d-9fcf-2eedf9648a04",
      name: "B-Movie",
      tagColor: "#00FFFF",
    },
    {
      id: "bf6b49e2-c7c4-4a87-9463-ef749321d84d",
      name: "Horror",
      tagColor: "#FF0000",
    },
  ],
};

let wrapped: any;

beforeEach(() => {
  wrapped = shallow(<Card item={item} key={0} index={0} />);
});

it("render without error", () => {
  expect(wrapped.exists()).toBe(true);
});

it("shows an image", () => {
  expect(wrapped.find(".imageWrapper").length).toEqual(1);
});

it("shows a title", () => {
  expect(wrapped.find(".title").text()).toEqual("Birdemic: Shock and Terror");
});

it("shows a description", () => {
  expect(wrapped.find(".description").text()).toEqual(
    "A horde of mutated birds descends upon the quiet town of Half Moon Bay, California. With the death toll rising, Two citizens manage to fight back, but will they survive Birdemic?"
  );
});

it("shows two tags", () => {
  expect(wrapped.find(".tagsWrapper").length).toEqual(2);
});
