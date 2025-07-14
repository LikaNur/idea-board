export const CreateIdeaModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-0-full">
        <h2 className="text-xl font-bold mb-4">Create New Idea</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="ideaTitle"
            >
              Title
            </label>
            <input
              type="text"
              id="ideaTitle"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter idea title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="ideaDescription"
            >
              Description
            </label>
            <textarea
              id="ideaDescription"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter idea description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Idea
          </button>
        </form>

        <button
          className="mt-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          {" "}
        </button>
        <span className="text-sm">Close</span>
      </div>
    </div>
  );
};

export default CreateIdeaModal;
