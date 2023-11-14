import React from 'react';
import CommentCard from './CommentCard';

type CommentListProps = {
  comments: MyComment[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <main className="flex flex-col p-5 w-6xl">
      {comments.map((comment: MyComment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </main>
  );
};

export default CommentList;