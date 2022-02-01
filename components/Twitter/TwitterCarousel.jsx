import React from "react";

export const TwitterCarousel = ({ tweets }) => {
  return <div className="">
      {
          tweets.map(k => {
              return <h1 className="mt-4">{k.text}</h1>
          })
      }
  </div>;
};
