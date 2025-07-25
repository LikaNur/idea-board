import { useState } from "react";
import { format } from "date-fns";
import { DeleteIcon } from "@shared/icons";
import { EditIdea } from "@features/edit-idea";
import { Button } from "@shared/ui";
import type { Idea } from "@entities/index";

type Props = {
  idea: Idea;
  onEdit: (id: string, updated: { title: string; description: string }) => void;
  onDelete: (id: string) => void;
};

export const IdeaCard = ({ idea, onEdit, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCancel = () => {;
    setIsEditing(false);
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 text-white rounded-xl shadow-2xl p-4 space-y-3 transition-all 0.4s ease-in-out hover:shadow-lg hover:scale-105">
      {isEditing ? (
        <EditIdea
          initialTitle={idea.title}
          initialDescription={idea.description}
          onCancel={handleCancel}
          onSave={(updated) => {
            onEdit(idea.id, updated);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2
              className="text-lg font-bold pr-2"
              onClick={() => setIsEditing(true)}
            >
              {idea.title}
            </h2>
            <Button
              type="reset"
              aria-label="Delete button"
              onClick={() => onDelete(idea.id)}
              className="bg-[#d55151] rounded-lg p-1 hover:!bg-[#ef616d]"
            >
              <DeleteIcon />
            </Button>
          </div>
          <p
            className="text-sm text-wrap overflow-hidden text-clip pt-2"
            onClick={() => setIsEditing(true)} 
          >
            {idea.description}
          </p>
        </>
      )}
      <div className="text-xs text-gray-300 pt-8">
        {idea.updatedAt.getTime() !== idea.createdAt.getTime() ? (
          <p>Updated: {format(idea.updatedAt, "MMM dd, yyyy")}</p>
        ) : (
          <p>Created: {format(idea.createdAt, "MMM dd, yyyy")}</p>
        )}
      </div>
    </div>
  );
};
