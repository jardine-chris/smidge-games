import React from "react";

import styles from "./VideoEmbed.module.scss"

export const VideoEmbed = (props) => {
  return (
    <div className={`${styles.responsiveContainer}`}>
      <iframe
        width="560"
        height="315"
        src={props.src}
        title={props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
