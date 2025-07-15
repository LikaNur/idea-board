export type EditIdeaProps = {
  initialTitle: string;
  initialDescription: string;
  maxLength?: number;
  onCancel: () => void;
  onSave: (updated: { title: string; description: string }) => void;
};