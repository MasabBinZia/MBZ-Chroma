import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ReqImageViewer({ imageUrl, title }: {imageUrl:string,title:string}) {
  return (
    <PhotoProvider>
      <div className="foo">
        <PhotoView key={title} src={imageUrl}>
          {/* <img src={imageUrl} alt={title} /> */}
        </PhotoView>
      </div>
    </PhotoProvider>
  );
}
