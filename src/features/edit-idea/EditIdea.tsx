import { useState } from "react";
import { Button, Input, Textarea } from "@shared/ui";
import { validateIdeaForm } from "@shared/helpers/validateIdea";

type Props = {
  initialTitle: string;
  initialDescription: string;
  maxLength?: number;
  onCancel: () => void;
  onSave: (updated: { title: string; description: string }) => void;
};

export const EditIdea = ({
  initialTitle,
  initialDescription,
  maxLength = 140,
  onCancel,
  onSave,
}: Props) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const newErrors = validateIdeaForm(title, description);

  const handleSubmit = () => {
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({ title: title.trim(), description: description.trim() });
  };

  return (
    <>
      <Input
        value={title}
        maxLength={maxLength}
        autoFocus
        label="Title"
        editLabel="text-white"
        id="editIdeaTitle"
        placeholder="Edit idea title"
        type="text"
        error={errors.title}
        onChange={(e) => setTitle(e.target.value)}
        className="focus:border-1 focus:border-black"
      />
      <Textarea
        id="editIdeaDescription"
        value={description}
        label="Description"
        editLabel="text-white"
        onChange={(e) => setDescription(e.target.value)}
        maxLength={140}
        className="focus:border-1 focus:border-black"
        counterClassName="!text-gray-200"
        placeholder="Edit idea description"
        error={errors.description}
        rows={5}
        autoResize
      />
      <div className="flex justify-start gap-2">
        <Button
          aria-label="Cancel button"
          type="reset"
          variant="gray"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
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
