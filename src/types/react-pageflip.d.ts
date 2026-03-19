declare module "react-pageflip" {
  import React from "react";

  export interface PageFlipInstance {
    flipNext(corner?: "top" | "bottom"): void;
    flipPrev(corner?: "top" | "bottom"): void;
    turnToPage(page: number): void;
    turnToNextPage(): void;
    turnToPrevPage(): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
  }

  export interface HTMLFlipBookProps {
    width: number;
    height: number;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    startPage?: number;
    size?: "fixed" | "stretch";
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;
    showCover?: boolean;
    mobileScrollSupport?: boolean;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    swipeDistance?: number;
    showPageCorners?: boolean;
    disableFlipByClick?: boolean;
    onFlip?: (e: { data: number }) => void;
    onChangeOrientation?: (e: { data: string }) => void;
    onChangeState?: (e: { data: string }) => void;
    onInit?: (e: { data: string }) => void;
    onUpdate?: (e: { data: string }) => void;
  }

  const HTMLFlipBook: React.ForwardRefExoticComponent<
    HTMLFlipBookProps & React.RefAttributes<{ pageFlip(): PageFlipInstance }>
  >;

  export default HTMLFlipBook;
}
