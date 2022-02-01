import React from "react";

export const TwitterFeed = ({ tweets }) => {
  return (
    <div className="bg-black">
      {tweets.map((tweet) => {
        return <div dangerouslySetInnerHTML={{ __html: tweet.html }}></div>;
      })}
    </div>
  );
};
