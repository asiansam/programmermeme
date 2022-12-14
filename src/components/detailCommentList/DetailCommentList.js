// Detail-comment-list.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  __getContents,
  __editComment,
  __deleteComment,
} from "../../redux/modules/detailMod";
import DetailCommentForm from "../detailCmmentForm/DetailCommentForm";
import DetailCommentItem from "../detailCommentItem/DetailCommentItem";

const DetailCommentList = ({ title, comments }) => {
  // const dispatch = useDispatch();
  // const param = useParams();
  // const { meme } = useSelector((state) => state.contents);

  // list에서 같은 component를 반복사용하도록 하는 메소드 map을 사용
  const CommentList = comments.map((comment) => {
    return (
      <DetailCommentItem
        comment={comment.comment}
        commentId={comment.commentId}
        key={comment.commentId}
      />
    );
  });

  return (
    <div>
      <ContentsTitle>{title /*props로 받아온 data를 사용*/}</ContentsTitle>
      <CommentListBox>{CommentList}</CommentListBox>
      <div>
        <DetailCommentForm />
      </div>
    </div>
  );
};

const ContentsTitle = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: float;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentListBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DetailCommentList;
