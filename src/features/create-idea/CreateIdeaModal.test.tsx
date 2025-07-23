// import { render, screen, fireEvent } from "@testing-library/react";
// import { SnackbarProvider } from "notistack";
// import { CreateIdeaModal } from "./CreateIdeaModal";

// test("renders and submits the idea form", () => {
//   const onClose = jest.fn();
//   const onAddIdea = jest.fn();
//   const modalRef = { current: document.createElement("div") };

//   render(
//     <SnackbarProvider>
//       <CreateIdeaModal
//         onClose={onClose}
//         onAddIdea={onAddIdea}
//         modalRef={modalRef}
//       />
//     </SnackbarProvider>
//   );

//   fireEvent.change(screen.getByPlaceholderText(/enter idea title/i), {
//     target: { value: "New Idea" },
//   });

//   fireEvent.change(screen.getByPlaceholderText(/enter idea description/i), {
//     target: { value: "This is a great idea!" },
//   });

//   fireEvent.click(screen.getByRole("button", { name: /submit idea/i }));

//   expect(onAddIdea).toHaveBeenCalled();
// });
