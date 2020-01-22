// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
const [likes, setLikes] = useState(props.postProp.likes);
// console.log(props.postProp)

  const add1Like = event => {
    setLikes(likes + 1);
  };

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
      <LikeSection originalLikes = {likes} addLikes = {add1Like} />
      <CommentSection
        postId={props.postProp.imageUrl}
        comments={props.postProp.comments}
      />
    </div>
  );
};

export default Post;
