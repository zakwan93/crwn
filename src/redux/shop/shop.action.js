import shopActionTypes from "./shop.types";

export const updateCollections = collectionMaps => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMaps
});
