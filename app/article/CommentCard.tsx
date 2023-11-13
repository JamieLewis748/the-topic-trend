'use client';
import TimeAgo from "react-timeago";
import CommentVote from "../CommentVote";

type Props = {
  comment: MyComment;
};

function CommentCard({ comment }: Props) {
  return (
    <main className="relative flex max-w-5xl items-center space-x-2 space-y-8">
      <div>
        {/* <img
        src={comment.author}
        alt="User Avatar"
        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
      /> */}
      </div>
      <div className="flex flex-col max-w-5xl pl-12">
        <p className="py-2 text-xs text-gray-400">
          <span className="font-semibold text-gray-600">{comment.author}</span>{" "}
          <TimeAgo date={comment.created_at} />
        </p>
        <p className="pb-2">{comment.body}</p>
        <CommentVote comment={comment} />
        <div className="mt-3 w-2/3 h-0.5 mx-auto bg-gray-700 "></div>
      </div>
    </main >
  );
}

export default CommentCard;