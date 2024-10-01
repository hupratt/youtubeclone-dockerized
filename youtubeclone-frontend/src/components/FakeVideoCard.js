import React from "react";
import styled from "styled-components";
import { timeSince } from "../utils";
import loading from "../assets/loading-waiting.gif";

const Wrapper = styled.div`
  .thumb {
    width: 100%;
    height: 180px;
    object-fit: cover;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .video-info-container {
    display: flex;
    margin-top: 0.3rem;
  }

  .channel-avatar img {
    position: relative;
    top: 5px;
  }

  .video-info span {
    font-size: 0.9rem;
    padding-right: 0.1rem;
  }

  @media screen and (max-width: 600px) {
    .thumb {
      height: 250px;
    }
  }

  @media screen and (max-width: 420px) {
    .thumb {
      height: 200px;
    }
  }
`;


const FakeVideoCard = () => (
  <Wrapper>
  <img className="thumb" src={loading} alt="thumbnail" />
  <div className="video-info-container">
    <div className="channel-avatar">

    </div>
    <div className="video-info">
      <h4>
      </h4>
      <p className="secondary">
        <span>0 views</span> <span>•</span>{" "}
        <span>{timeSince(0)} ago</span>
      </p>
    </div>
  </div>
</Wrapper>
)

export default FakeVideoCard;
