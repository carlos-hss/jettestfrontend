export interface IOperatorAccordionProps {
  id: string;
  name: string;
  clients?: IClients[];
}

interface IClients {
  birthDate: string;
  created_at: Date;
  email: string;
  id: string;
  name: string;
  updated_at: Date;
}
