import { Link } from '@tanstack/react-router';
import type { IdeaType } from '@/types';
import clsx from 'clsx';

const IdeaCard = ({
  idea,
  button = true,
}: {
  idea: IdeaType;
  button?: boolean;
}) => {
  const linkClassess = clsx({
    'text-blue-600 hover:underline mt-3': !button,
    'w-full text-center mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition':
      button,
  });
  return (
    <div className="border border-gray-300 p-4 rounded shadow bg-white flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{idea.title}</h2>
        <p className="text-gray-700 mt-2">{idea.summary}</p>
      </div>
      <Link
        to="/ideas/$ideaId"
        params={{ ideaId: idea._id.toString() }}
        className={linkClassess}
      >
        {button ? 'View Idea' : 'Read More'}
      </Link>
    </div>
  );
};

export default IdeaCard;
