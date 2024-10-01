import React from "react";
import LikedVideos from "./LikedVideos";
import History from "./History";
import { useSelector } from "react-redux";
import NoResults from "../components/NoResults";
import Skeleton from "../skeletons/TrendingSkeleton";

const Library = () => {
  const { token } = useSelector((state) => state.user.data);
  const { isFetching } = useSelector((state) => state.history);

  if (isFetching) {
    return <Skeleton />;
  }
  if (token===undefined) {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );
  } else {
    return(<></>)
  }
};

export default Library;
