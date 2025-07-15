import { EditIdea } from "@shared/icons";
import type IdeaCardProps from "./IdeaCardTypes";
import DeleteIdea from "@shared/icons/DeleteIcon";

export const IdeaCard = ({
  id,
  title,
  description,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}: IdeaCardProps) => {
  return (
    <div className="backdrop-blur-xl bg-white/10 text-white rounded-xl shadow-2xl p-4 space-y-3 transition-all 0.4s ease-in-out hover:shadow-lg hover:scale-105">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex gap-1">
          <button onClick={() => onEdit(id)}>
            <EditIdea />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="bg-[#ED5E69] rounded-lg"
          >
            <DeleteIdea />
          </button>
        </div>
      </div>
      <p className="text-sm text-wrap overflow-hidden text-clip">
        {description}
      </p>
      <div className="text-xs text-gray-300">
        <p>Created: {createdAt.toLocaleDateString()}</p>
        {updatedAt.getTime() !== createdAt.getTime() && (
          <p>Updated: {updatedAt.toLocaleDateString()}</p>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;
