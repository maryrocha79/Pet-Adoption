import React from "react";
const SearchContext = React.createContext({
  location: "",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreed() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
