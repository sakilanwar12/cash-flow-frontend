import { Label } from "./label";

interface ILabelError {
  label?: React.ReactNode | string;
  error?: string;
  children: React.ReactNode;
  id?: string;
}
const LabelError = ({ id, label, error, children }: ILabelError) => {
  return (
    <div className="flex-1 w-full space-y-2.5">
      {label && <Label htmlFor={id}>{label}</Label>}
      {children}
      {error && <p>{error}</p>}
    </div>
  );
};

export default LabelError;
