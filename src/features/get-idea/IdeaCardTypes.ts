export default interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
