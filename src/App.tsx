import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { setParameter } from "./actions/setParameter";
import { SET_PHOTOS } from "./actions/types";
import { connect, ConnectedProps } from "react-redux";
import { AppRootState } from "./reducers";

type PropsFromRedux = ConnectedProps<typeof reduxConnector>;

const reduxConnector = connect(
  (state: AppRootState) => ({
    photos: state.homeState.photos,
  }),
  { setParameter }
);

const App: React.FC<PropsFromRedux> = ({ photos, setParameter }) => {
  useEffect(() => {
    if (photos.length === 0) {
      fetch("get.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setParameter("photos", SET_PHOTOS, data);
        });
    }
  }, [setParameter, photos.length]);

  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
    </BrowserRouter>
  );
};

export default reduxConnector(App);
