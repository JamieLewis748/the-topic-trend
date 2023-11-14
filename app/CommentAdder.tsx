'use client';

import { useUser } from "@/context/userContext";


function CommentAdder() {
  const { user } = useUser();

  return (
    <div className="p-5 pl-16 max-w-6xl">
      <p className='text-sm pb-1 pl-1'>
        Comment as <span className="text-red-500">{user?.username}</span>
      </p>
      <form className="flex flex-col max-w-5xl pb-2 gap-2">
        <textarea
          disabled={!user}
          className="bg-slate-200 h-24 rounded-lg p-2 pl-4 w-full"
          placeholder={user ? 'What are your thoughts?' : 'Please sign in to leave a comment'}
        />
        <button
          type="submit"
          className="h-10 rounded-lg bg-slate-900 font-semibold text-white dark:bg-slate-600 disabled:bg-gray-200">
          Comment
        </button>
      </form>


    </div>
  );
}

export default CommentAdder;