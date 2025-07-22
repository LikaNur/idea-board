export type IdeaCardProps = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  onEdit: (id: string, updated: { title: string; description: string }) => void;
  onDelete: (id: string) => void;
};
