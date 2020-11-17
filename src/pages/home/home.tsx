import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/header/header";
import { setParameter } from "./../../actions/setParameter";
import { connect, ConnectedProps } from "react-redux";
import { AppRootState } from "./../../reducers";
import Card from "../../components/card/card";
import "./home.scss";
import { PhotosModel, tagsModel } from "../../models/photosModels";

type PropsFromRedux = ConnectedProps<typeof reduxConnector>;

const reduxConnector = connect(
  (state: AppRootState) => ({
    photos: state.homeState.photos,
  }),
  { setParameter }
);

const Home: React.FC<PropsFromRedux> = ({ photos, setParameter }) => {
  const [filteredPhotos, changeFilteredPhotos] = useState(photos);
  const [searchText, changeSearchText] = useState("");

  useEffect(() => {
    changeFilteredPhotos(photos);
  }, [photos]);

  const onSearchClick = useCallback(
    (tag: string) => {
      let updatedList: PhotosModel[] = [];

      photos.map((item: PhotosModel) => {
        return item.tags.map((subItem: tagsModel) => {
          if (
            subItem.name.toLocaleLowerCase().includes(tag.toLocaleLowerCase())
          ) {
            if (!updatedList.includes(item)) {
              updatedList.push(item);
            }
          }
        });
      });

      changeFilteredPhotos(updatedList);
    },
    [photos]
  );

  return (
    <div>
      <Header
        searchText={searchText}
        changeSearchText={changeSearchText}
        onSearchClick={onSearchClick}
      />
      <div className={"cardsContainer"}>
        {filteredPhotos.map((item: PhotosModel, index: number) => {
          return <Card item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default reduxConnector(Home);
