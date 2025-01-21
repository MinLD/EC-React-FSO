import { useEffect, useRef, useState } from "react";

const useScrollTracking = () => {
  const [scrollDriction, setScrollDriction] = useState(null); //để lưu trạng thái hướng cuộn có thể down,up,null
  const previousScrollPosition = useRef(0); //: Giữ giá trị của vị trí cuộn trước đó giữa các lần cuộn mà không làm component re-render.
  const [scrollPosition, setScrollposition] = useState();

  const scrollTracking = () => {
    const currenScrollPosition = window.pageYOffset; //trả về vị trí cuộn dọc hiện tại của trang, tính bằng pixel, từ phía trên của trang.
    if (currenScrollPosition > previousScrollPosition.current) {
      setScrollDriction("down");
    } else if (currenScrollPosition < previousScrollPosition.current) {
      setScrollDriction("up");
    }
    previousScrollPosition.current =
      currenScrollPosition <= 0 ? 0 : currenScrollPosition; // nếu vị trí cuộn <=0 (cuộn đến đỉnh trang) gán ===0 tránh vị trị là số âm
    setScrollposition(currenScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);
  return {
    scrollDriction,
    scrollPosition,
  };
};
export default useScrollTracking;
