import { useEffect, useState } from "react";
import { createContext } from "react";
import { getAllProduct } from "../apis/apiProduct";

export const OurshopContext = createContext();

export const OutshopProvider = ({ children }) => {
  const sortOptions = [
    {
      label: "Default sorting",
      value: "0",
    },
    {
      label: "Sort by popularity",
      value: "1",
    },
    {
      label: "Sort by average rating",
      value: "2",
    },
    {
      label: "Sort by latest",
      value: "3",
    },
    {
      label: "Sort by price: low to hight",
      value: "4",
    },
    {
      label: "Sort by price: hight to  low",
      value: "5",
    },
  ];
  const showOptions = [
    {
      label: "8",
      value: "8",
    },
    {
      label: "12",
      value: "12",
    },
    {
      label: "All",
      value: "All",
    },
  ];
  const [sortId, setSortId] = useState("0");
  const [showId, setShowId] = useState("8");
  const [isShowGrid, setShowGrid] = useState(true);
  const [isProduct, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isPage, setPage] = useState(1);
  const [isTotal, setTotal] = useState(0);
  const [isLoadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    const query = {
      sortType: sortId,
      page: isPage + 1,
      limit: showId,
    };
    setLoadMore(true);

    getAllProduct(query)
      .then((res) => {
        setProduct((pre) => {
          return [...pre, ...res.contents];
        });
        setPage(+res.page === 3 ? 1 : Number(res.page));
        setTotal(Number(res.total));
        setLoadMore(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const value = {
    showOptions,
    sortOptions,
    setSortId,
    setShowId,
    setShowGrid,
    isShowGrid,
    isProduct,
    isLoading,
    handleLoadMore,
    isTotal,
    isLoadMore,
  };

  useEffect(() => {
    const query = {
      sortType: sortId,
      page: 1,
      limit: showId,
    };
    setLoading(true);
    getAllProduct(query)
      .then((res) => {
        setProduct(res.contents);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [sortId, showId]);

  return (
    <OurshopContext.Provider value={value}>{children}</OurshopContext.Provider>
  );
};
