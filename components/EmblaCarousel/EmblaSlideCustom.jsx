import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const EmblaSlideCustom = (props) => {
  const [loading, setLoading] = useState(false);
  const responsiveInner = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3";
  const responsiveImage = "xl:col-span-2";

  if (loading) {
    return (
      <SkeletonTheme baseColor="#544d71" highlightColor="#655f7f">
        <div class="px-2 flex items-center justify-center">
          <div class="bg-grurp-700/40 p-4 rounded-xl border-grurp-600/70 backdrop-blur-sm border w-full">
            <div class="flex justify-between">
              <div class="flex items-center">
                <Skeleton width="3.5rem" height="3.5rem" borderRadius="50%" />
                <div className="ml-1.5 w-32">
                  <span className="block">
                    <Skeleton width="8rem" />
                  </span>
                  <span className="block">
                    <Skeleton width="6rem" />
                  </span>
                </div>
              </div>
              <Skeleton height="2rem" width="2rem" />
            </div>
            <p className="mt-3">
              <Skeleton count={3} />
            </p>
            <p className="mt-3">
              <Skeleton count={2} />
            </p>
            <p class="py-1 my-0.5">
              <Skeleton width="12rem" />
            </p>
            <hr className="my-2 border-orange-600/70" />
            <p class="mt-3">
              <Skeleton width="66%" />
            </p>
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  return (
    <div className="embla__slide">
      <div className="embla__slide__inner">{props.children}</div>
    </div>
  );
};
