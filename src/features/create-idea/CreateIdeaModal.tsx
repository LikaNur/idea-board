import { CancelIdea } from "@shared/icons";

export const CreateIdeaModal = ({
  onClose,
  modalRef,
}: {
  onClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-[#F7F7F8] p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-xl"
        ref={modalRef}
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold  text-black">Create New Idea</h2>

          <button
            onClick={onClose}
            aria-label="Close button"
            className="hover:bg-gray-200 p-2 rounded-3xl"
          >
            {" "}
            <CancelIdea className="w-6 h-6" />
          </button>
        </div>
        <form>
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
              type="text"
              id="ideaTitle"
              className="w-full p-3 border border-gray-300 rounded-lg text-black text-sm bg-white hover:border-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-400 transition "
              placeholder="Enter idea title"
              required
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
              Make it short and sweet (140 characters max)
            </span>
            <textarea
              maxLength={140}
              id="ideaDescription"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-white text-black  hover:border-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-400 transition"
              placeholder="Enter idea description"
              onError={(e) => {
                e.currentTarget.style.height = "auto";
                e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
              }}
              rows={3}
              required
            ></textarea>
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
