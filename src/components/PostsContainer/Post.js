// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes

  

  return (
    <div className="post-border">
      <PostHeader
        username={props.postProp.username}
        thumbnailUrl={
          props.postProp.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.postProp.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.postProp.imageUrl}
        comments={props.postProp.comments}
      />
    </div>
  );
};

export default Post;
