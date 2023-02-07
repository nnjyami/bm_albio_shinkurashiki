import { RefObject, useRef } from 'react';

// -----------------------------
// interface
// -----------------------------
/*
export type IuseScrollProps = {
    outerContentRef: RefObject<HTMLDivElement>;
    innerContentRef: RefObject<HTMLUListElement>;
    setScrollPosition: (position: number) => void;
    getScrollWidth: () => number;
};
*/

// -----------------------------
// hooks
// -----------------------------
export const useScroll = () => {
    const innerContentRef = useRef(null);
    const outerContentRef = useRef(null);
    
    /**
     * 画面初期化時にスライドの位置を変更する
     */
    const setScrollPosition = (position) => {
      const outerRef = outerContentRef.current;
      if (outerRef) {
        outerRef.scrollTop = position;
      }
    };
    
    /**
     * 現在の要素の横幅を取得してセンターのスクロール位置を取得する
     */
    const getScrollWidth = () => {
      const innerRef = innerContentRef.current;
      const outerRef = outerContentRef.current;
    
      if (innerRef && outerRef) {
        const innerWidth = innerRef.offsetWidth;
        const outerWidth = outerRef.offsetWidth;
        return (innerWidth - outerWidth) / 2;
      }
      return 0;
    };

    const getScrollHeight = () => {
      const innerRef = innerContentRef.current;
      const outerRef = outerContentRef.current;
    
      if (innerRef && outerRef) {
        const innerHeight = innerRef.offsetHeight;
        const outerHeight = outerRef.offsetHeight;
        return innerHeight - outerHeight;
      }
      return 0;
    };
    
    return {
        innerContentRef,
        outerContentRef,
        setScrollPosition,
        getScrollWidth,
        getScrollHeight
    };
};
