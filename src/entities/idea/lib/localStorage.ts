import type { Idea } from "../model/types";

const STORAGE_KEY = "ideas";

export const getIdeas = (): Idea[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveIdea = (idea: Idea) => {
  const ideas = getIdeas();
  const updated = [idea, ...ideas];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const clearIdeas = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const updateIdea = (updatedIdea: Idea) => {
  const ideas = getIdeas();

  const updatedIdeas = ideas.map((idea) =>
    idea.id === updatedIdea.id ? updatedIdea : idea
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIdeas));
};
