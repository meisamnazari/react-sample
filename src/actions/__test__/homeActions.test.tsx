import { setParameter } from "../setParameter";
import { SET_PHOTOS } from "../types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const photosArray = [
  {
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
  },
];

it("handle changeBodyText action", () => {
  const action = {
    type: SET_PHOTOS,
    payload: { photos: photosArray },
  };

  const store = mockStore({ payload: [] });
  store.dispatch(setParameter("photos", SET_PHOTOS, photosArray));

  expect(store.getActions()).toEqual([action]);
});
