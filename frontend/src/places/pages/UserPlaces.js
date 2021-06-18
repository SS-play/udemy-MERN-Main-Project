import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "empire state building",
    description: "one of the most famous skyscrapers in the world",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u1",
    location: { lat: 40.748570526896444, lng: -73.98566976654153 },
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "empire state building",
    description: "one of the most famous skyscrapers in the world",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u2",
    location: { lat: 40.748570526896444, long: -73.98566976654153 },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
