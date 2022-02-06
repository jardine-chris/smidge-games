import React from "react";
import { MdPending, MdRotateLeft, MdCheckCircle } from "react-icons/md"

import styles from "./RoadmapCard.module.scss";

export const RoadmapCard = (props) => {
  function getStatus(status) {
    switch (status) {
      case "Not Started":
        return { icon: <MdPending />, color: "text-blue-600" };
      case "In Progress":
        return { icon: <MdRotateLeft />, color: "text-yellow-600" };
      case "Complete":
        return { icon: <MdCheckCircle />, color: "text-green-600" };
    }
  }
  return (
    <div
      className={`${styles.roadmapCardBgImg} ${props.bgPosition} mt-2 bg-orange-600 border-2 rounded border-orange-600`}
    >
      <div className="my-4">
        <h1 className="text-3xl font-bold text-center text-orange-600 uppercase font-spooky">
          {props.title}
        </h1>
        <h3 className="m-0 text-sm text-center text-zinc-300 text-light font-montserrat">
          {props.date}
        </h3>
      </div>
      <div>
        <div className="px-2 py-4 m-4 overflow-hidden text-gray-300 border rounded border-zinc-600 bg-zinc-600/40">
          <ul className="font-light font-montserrat">
            {props.content.map((item) => {
              const status = getStatus(item.status);
              return (
                <li key={item.data} className="my-2">
                  <div className="relative flex">
                    <p
                      className={`${status && status.color} p-1 material-icons`}
                    >
                      {status && status.icon}
                    </p>
                    <p className="absolute text-sm -translate-y-1/2 left-8 top-1/2">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
