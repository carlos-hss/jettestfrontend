import axios from "axios";
import React from "react";
import { IContext, IContextProps, IOperators } from "./context.structure";

const Context = React.createContext<IContext>({} as IContext);

const Provider = ({ children }: IContextProps) => {
  const [selectedOperator, setSelectedOperator] = React.useState<string>("");
  const [operators, setOperators] = React.useState<IOperators[]>(
    [] as IOperators[]
  );

  const getOperators = async () => {
    const response = await axios.get("http://localhost:8080/operators");

    console.log(response.data);
    setOperators(response.data);
  };

  React.useLayoutEffect(() => {
    getOperators();
  }, []);

  const value = React.useMemo(
    () => ({
      selectedOperator,
      setSelectedOperator,
      operators,
      setOperators,
    }),
    [selectedOperator, operators]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
