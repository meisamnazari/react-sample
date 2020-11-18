import React from "react";
import { shallow } from "enzyme";
import Header from "../header/header";

let wrapped: any;

beforeEach(() => {
  wrapped = shallow(
    <Header
      searchText={""}
      changeSearchText={() => ""}
      onSearchClick={() => ""}
    />
  );
});

it("render without error", () => {
  expect(wrapped.exists()).toBe(true);
});

it("shows an input", () => {
  expect(wrapped.find("input").length).toEqual(1);
});

it("shows a search button", () => {
  expect(wrapped.find(".searchButton").length).toEqual(1);
});
