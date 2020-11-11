/* eslint-disable */

import { useEffect, useCallback, useRef } from "react";
import {
  advanceFlyerPage,
} from "../flyers/actions";
// infinite scrolling with intersection observer
const useInfiniteScroll = (scrollRef) => (dispatch) => {
  const scrollObserver = useCallback((node) => {
    new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          dispatch(advanceFlyerPage());
        }
      });
    }).observe(node);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

export default useInfiniteScroll;