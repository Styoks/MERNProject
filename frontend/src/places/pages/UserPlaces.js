import React from "react";

import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "One of the most famous sky scrapers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address:
      "20 W 34th St., New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "c1",
  },
  {
    id: "p2",
    title: "Empire State",
    description: "One of the most famous sky scrapers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address:
      "20 W 34th St., New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "c2",
  },
];
const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place=> place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
