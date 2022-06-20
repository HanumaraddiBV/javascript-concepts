import React from "react";

const ImageContext = React.createContext();

export const GalleryContextProvider = ImageContext.Provider;
export const GalleryContextConsumer = ImageContext.Consumer;
export default ImageContext;
