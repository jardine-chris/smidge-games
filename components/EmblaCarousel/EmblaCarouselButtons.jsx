import React from "react";

export const DotButton = ({ selected, onClick }) => (
  <div className="w-full px-2">
    <button
      className={`embla__dot ${selected ? "is-selected" : ""}`}
      type="button"
      onClick={onClick}
    />
    <style jsx>
      {`
        .embla__button {
          outline: 0;
          cursor: pointer;
          background-color: transparent;
          touch-action: manipulation;
          position: absolute;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          border: 0;
          width: 30px;
          height: 30px;
          justify-content: center;
          align-items: center;
          fill: #ea580c;
          padding: 0;
        }

        .embla__button:disabled {
          cursor: default;
          opacity: 0.3;
        }

        .embla__button__svg {
          width: 100%;
          height: 100%;
          fill: #ea580c;
        }

        .embla__button--prev {
          left: 8px;
        }

        .embla__button--next {
          right: 8px;
        }

        .embla__dots {
          display: flex;
          list-style: none;
          justify-content: center;
        }

        .embla__dot {
          background-color: transparent;
          cursor: pointer;
          position: relative;
          outline: 0;
          border: 0;
          width: 100%;
          height: 50px;
          margin: 0 0.25rem;
          display: flex;
          align-items: center;

          // &:hover {
          //   &::after {
          //     background-color: #52525b;
          //   }
          // }
        }

        .embla__dot:after {
          background-color: #efefef;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          content: "";
        }

        .embla__dot.is-selected::after {
          background-color: #ea580c;
          height: 8px;
          opacity: 1;
        }
      `}
    </style>
  </div>
);
