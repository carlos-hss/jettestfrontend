import React from "react";

export interface IContextProps {
  children: React.ReactNode;
}

export interface IOperators {
  id: string;
  name: string;
  clients: IClients[];
}

export interface IContext {
  selectedOperator: string;
  setSelectedOperator: React.Dispatch<React.SetStateAction<string>>;
  operators: IOperators[];
  setOperators: React.Dispatch<React.SetStateAction<IOperators[]>>;
}

interface IClients {
  birthDate: string;
  created_at: Date;
  email: string;
  id: string;
  name: string;
  updated_at: Date;
}
