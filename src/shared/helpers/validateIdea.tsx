type IdeaFormErrors = {
  title?: string;
  description?: string;
};

export const validateIdeaForm = (
  title: string,
  description: string,
  maxLength = 140
): IdeaFormErrors => {
  const errors: IdeaFormErrors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  }
  if (!description.trim()) {
    errors.description = "Description is required";
  } else if (description.length > 140) {
    errors.description = `Description must be ${maxLength} characters or less`;
  }

  return errors;
};
