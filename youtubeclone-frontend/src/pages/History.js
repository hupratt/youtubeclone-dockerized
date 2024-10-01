import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import NoResults from "../components/NoResults";
import { StyledTrending } from "./Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { getHistory } from "../reducers/history";

const History = ({ nopad }) => {
  const dispatch = useDispatch();
  const { isFetching, videos, data: profile } = useSelector((state) => state.history);
  const { token } = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

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
  }

  return (
    <StyledTrending nopad={nopad}>
      <h2>History</h2>

      {!isFetching && !videos.length && (
        <p className="secondary">
          Videos that you have watched will show up here
        </p>
      )}

      {videos.map((video) => (
        <Link key={video.id} to={`/watch/${video.id}`}>
          <TrendingCard video={video} />
        </Link>
      ))}
    </StyledTrending>
  );
};

export default History;
