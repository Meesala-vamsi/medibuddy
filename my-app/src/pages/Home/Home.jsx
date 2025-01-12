import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices";
import Carousel from "../../components/carousel";
// import FeaturedHealth from "../../components/featuredHealth";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className=" w-full">
      {data &&
        data.map((eachItem) => (
          <div
            key={eachItem?.id}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {eachItem?.id === "1" &&
              eachItem?.props?.map((eachProp, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={eachProp?.iconUrl}
                    alt={eachProp?.configIconTagName}
                    className="h-14"
                  />
                  <p className="text-sm text-center w-28 font-bold">
                    {eachProp?.iconText}
                  </p>
                </div>
              ))}
            {eachItem?.id == 2 && <Carousel bannerData={eachItem} />}
            {/* {eachItem?.id == 3 && <FeaturedHealth categories={eachItem.categories["10386"]} />} */}
          </div>
        ))}
    </div>
  );
};

export default Home;
