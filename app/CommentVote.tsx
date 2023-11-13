import { useUser } from "@/context/userContext";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/outline";

type Props = {
    comment: MyComment;
};

function CommentVote({ comment }: Props) {
    const { user } = useUser();

    // const handleVote = async (value: number) => {
    //     if(!user)
    // }

    return (
        <div className="flex gap-2">
            <HandThumbUpIcon className="h-5" />
            <HandThumbDownIcon className="h-5" />
            <p className="text-sm text-gray-400 ">Votes: {comment.votes}</p>
        </div>
    );
}

export default CommentVote;