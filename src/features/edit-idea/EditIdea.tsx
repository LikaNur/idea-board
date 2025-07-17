import { useState } from "react";
import type { EditIdeaProps } from "./EditIdeaTypes";
import { Button, Input, Textarea } from "@shared/ui";

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
      <Input
        value={title}
        maxLength={maxLength}
        autoFocus
        id="editIdeaTitle"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        className="focus:border-1 focus:border-black"
      />
      <Textarea
        id="editIdeaDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={140}
        className="focus:border-1 focus:border-black"
        counterClassName="text-gray-200"
        placeholder="Edit idea description"
        rows={5}
        autoResize
      />
      <div className="flex justify-start gap-2">
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
