import type { Idea } from "../../entities";
import { sortIdeas } from "./SortIdea";

const alpha = {
  id: "1",
  title: "Alpha",
  description: "First idea",
  createdAt: new Date("July 1, 2025"),
  updatedAt: new Date(),
};

const gamma = {
  id: "2",
  title: "Gamma",
  description: "Third idea",
  createdAt: new Date("June 1, 2025"),
  updatedAt: new Date(),
};

const beta = {
  id: "3",
  title: "Beta",
  description: "Second idea",
  createdAt: new Date("August 1, 2025"),
  updatedAt: new Date(),
};

describe("sort idea features", () => {
  // Sort descending title
  test("should sort ideas by title in descending order", () => {
    //arrange
    const ideas: Idea[] = [alpha, gamma, beta];

    //act
    const sortedIdeas = sortIdeas(ideas, "title-desc");

    //assert
    expect(sortedIdeas).toStrictEqual([gamma, beta, alpha]);
  });
  
  // Sort ascending title
  test("should sort ideas by title in ascending order", () => {
    //arrange
    const ideas: Idea[] = [alpha, gamma, beta];

    //act
    const sortedIdeas = sortIdeas(ideas, "title-asc");

    //assert
    expect(sortedIdeas).toStrictEqual([alpha, beta, gamma]);
  });

  // Sort descending createdAt
  test("should sort ideas by createdAt in descending order", () => {
    //arrange
    const ideas: Idea[] = [alpha, gamma, beta];

    //act
    const sortedIdeas = sortIdeas(ideas, "createdAt-desc");

    //assert
    expect(sortedIdeas).toStrictEqual([beta, alpha, gamma]);
  });

  // Sort ascending createdAt
  test("should sort ideas by createdAt in ascending order", () => {
    //arrange
    const ideas: Idea[] = [alpha, gamma, beta];

    //act
    const sortedIdeas = sortIdeas(ideas, "createdAt-asc");

    //assert
    expect(sortedIdeas).toStrictEqual([gamma, alpha, beta]);
  });
});
