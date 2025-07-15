import { useState } from "react";
import type { EditIdeaProps } from "./EditIdeaTypes";

export const EditIdea = ({
  initialTitle,
  initialDescription,
  maxLength = 140,
  onCancel,
  onSave,
}: EditIdeaProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = () => {
    onSave({ title, description });
  };

  return (
    <>
      <input
        value={title}
        maxLength={maxLength}
        onChange={(e) => setTitle(e.target.value)}
        className="text-lg font-bold text-black px-2 py-1 rounded w-full"
      />

      <textarea
        value={description}
        maxLength={maxLength}
        onChange={(e) => setDescription(e.target.value)}
        className="text-sm text-black px-2 py-1 rounded w-full"
        rows={5}
      />

      <p className="text-text text-xs">
        {maxLength - description.length} characters left
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="text-sm px-2 py-1 bg-gray-500 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="text-sm px-2 py-1 bg-green-600 rounded"
          disabled={title.trim() === ""}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditIdea;
