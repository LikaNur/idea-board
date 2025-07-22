import { saveIdea } from "@entities/index";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";
import { CancelIcon } from "@shared/icons";
import { Button, Input, Textarea } from "@shared/ui";
import type { Idea } from "@entities/idea/model/types";
import { validateIdeaForm } from "@shared/helpers/validateIdea";

type Props = {
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  onAddIdea: (idea: Idea) => void;
};

export const CreateIdeaModal = ({ onClose, modalRef, onAddIdea }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateIdeaForm(title, description);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newIdea = {
      id: uuidv4(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    saveIdea(newIdea);
    onAddIdea(newIdea);
    enqueueSnackbar("Idea created successfully!", { variant: "success" });

    setTitle("");
    setDescription("");
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 flex p-4 items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-[#F7F7F8] p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-xl"
        ref={modalRef}
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold  text-black">Create New Idea</h2>
          <Button
            type="reset"
            aria-label="Close button"
            onClick={onClose}
            variant="circle"
            className="p-2"
          >
            <CancelIcon />
          </Button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-8">
            <label
              className="block text-md  text-black font-semibold mb-2"
              htmlFor="ideaTitle"
            >
              Title*
            </label>
            <span className="text-sm text-gray-500 mb-2 block">
              Name your idea
            </span>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="ideaTitle"
              autoFocus
              error={errors.title}
              placeholder="Enter idea title"
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-md font-semibold mb-2 text-black"
              htmlFor="ideaDescription"
            >
              Description*
            </label>
            <span className="text-sm text-gray-500 mb-2 block">
              Make it short and sweet
            </span>
            <Textarea
              id="ideaDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={140}
              error={errors.description}
              placeholder="Enter idea description"
              rows={3}
              autoResize
            />
          </div>
          <Button type="submit" variant="primary" aria-label="Submit button">
            Submit Idea
          </Button>
        </form>
      </div>
    </div>
  );
};
