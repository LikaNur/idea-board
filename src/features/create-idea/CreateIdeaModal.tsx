import { saveIdea } from "@entities/index";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSnackbar } from "notistack";
import type { CreateIdeaProps } from "./CreateIdeaTypes";
import { CancelIcon } from "@shared/icons";

export const CreateIdeaModal = ({ onClose, modalRef }: CreateIdeaProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newError: { title?: string; description?: string } = {};

    if (!title.trim()) {
      newError.title = "Title is required";
    }
    if (!description.trim()) {
      newError.description = "Description is required";
    } else if (description.length > 140) {
      newError.description = "Description must be 140 characters or less";
    }
    if (Object.keys(newError).length > 0) {
      setErrors(newError);
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
          <button
            onClick={onClose}
            aria-label="Close button"
            className="hover:bg-gray-200 p-2 rounded-3xl"
          >
            <CancelIcon className="w-6 h-6" />
          </button>
        </div>
        <form method="POST" onSubmit={handleFormSubmit}>
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
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="ideaTitle"
              className={`w-full p-3 border rounded-lg text-sm bg-white text-black hover:border-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-400 transition ${
                errors.title ? "border-red-600" : "border-gray-300"
              }`}
              autoFocus
              placeholder="Enter idea title"
            />
            {errors.title && (
              <span className="text-red-600 text-xs">{errors.title}</span>
            )}
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
            <textarea
              value={description}
              onChange={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
                setDescription(e.target.value);
              }}
              maxLength={140}
              id="ideaDescription"
              className={`w-full p-3 border rounded-lg text-sm bg-white text-black hover:border-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-400 transition ${
                errors.description ? "border-red-600" : "border-gray-300"
              }`}
              placeholder="Enter idea description"
              rows={3}
            />
            <div className="flex justify-between items-center">
              {errors.description && (
                <span className="text-red-600 text-xs">
                  {errors.description}
                </span>
              )}
              <div className="text-black text-xs">
                {140 - description.length} characters left
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#0D81A3] text-white py-3 px-4 rounded-lg hover:bg-[#66AEC5] transition"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateIdeaModal;
