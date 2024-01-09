import { SnackData } from "../../interfaces/SnackData";

export interface SnackContentProps {
  beard: SnackData[];
  eyebrow: SnackData[];
  hair: SnackData[];
}

export interface SnackProvidersProps {
  children: React.ReactNode;
}