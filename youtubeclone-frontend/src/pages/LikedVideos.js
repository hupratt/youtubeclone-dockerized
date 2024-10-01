import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TrendingCard from "../components/TrendingCard";
import NoResults from "../components/NoResults";
import { StyledTrending } from "./Trending";
import Skeleton from "../skeletons/TrendingSkeleton";
import { getLikedVideos } from "../reducers/likedVideo";

const LikedVideos = () => {
  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector((state) => state.likedVideo);
  const { token } = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getLikedVideos());
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

  if (isFetching) {
    return <Skeleton />;
  }
  return (
    <StyledTrending>
      <h2>Liked Videos</h2>

      {videos?.length === 0 && (
        <p className="secondary">
          Videos that you have liked will show up here
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

export default LikedVideos;
