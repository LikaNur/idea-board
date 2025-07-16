import { useState } from "react";
import { format } from "date-fns";
import type IdeaCardProps from "./IdeaCardTypes";
import { DeleteIcon, EditIcon } from "@shared/icons";
import { EditIdea } from "@features/edit-idea";

export const IdeaCard = ({
  id,
  title,
  description,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}: IdeaCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    onEdit(id, { title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setEditedDescription(description);
    setIsEditing(false);
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 text-white rounded-xl shadow-2xl p-4 space-y-3 transition-all 0.4s ease-in-out hover:shadow-lg hover:scale-105">
      {isEditing ? (
        <EditIdea
          initialTitle={title}
          initialDescription={description}
          onCancel={handleCancel}
          onSave={(updated) => {
            onEdit(id, updated);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold pr-2">{title}</h2>
            <div className="flex gap-1 pl-2">
              <button
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              >
                <EditIcon />
              </button>
              <button
                onClick={() => onDelete(id)}
                className="bg-[#ED5E69] rounded-lg"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
          <p className="text-sm text-wrap overflow-hidden text-clip pt-2">
            {description}
          </p>
        </>
      )}
      <div className="text-xs text-gray-300 pt-8">
        {updatedAt.getTime() !== createdAt.getTime() ? (
          <p>Updated: {format(updatedAt, "MMM dd, yyyy")}</p>
        ) : (
          <p>Created: {format(createdAt, "MMM dd, yyyy")}</p>
        )}
      </div>
    </div>
  );
};

export default IdeaCard;
