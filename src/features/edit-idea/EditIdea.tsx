import { useState } from "react";
import type { EditIdeaProps } from "./EditIdeaTypes";
import { Button } from "@shared/ui";

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
        <Button aria-label="Cancel button" variant="gray" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          aria-label="Save button"
          variant="success"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default EditIdea;
