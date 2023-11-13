import CommentCard from "./CommentCard";


type Props = {
  comments: CommentList;
};

function CommentList({ comments }: Props) {


  return (
    <main className="flex flex-col p-5 w-6xl">{
      comments.map((comment: MyComment) => (
        <CommentCard key={comment.comment_id} comment={comment} />

      ))}
    </main>
  );
}
export default CommentList;