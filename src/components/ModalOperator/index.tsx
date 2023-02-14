import React from "react";
import { IModalOperatorProps } from "./modalOperator.structure";
import { Container, Modal } from "./styles";
import { IoMdClose } from "react-icons/io";
import { SecondaryButton } from "../MainContent/styles";
import { api } from "../../utils/api";
import { Context } from "../../context";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ModalOperator({
  setIsModalOperatorOpen,
}: IModalOperatorProps) {
  const { setOperators } = React.useContext(Context);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [operatorName, setOperatorName] = React.useState<string>("");

  const handleClose = () => {
    setIsModalOperatorOpen(false);
  };

  const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setOperatorName(evt.target.value);
  };

  const handleCreateOperator = async () => {
    setIsLoading(true);

    await api.post("/operators", { name: operatorName });
    const operators = await api.get("/operators");

    setOperators(operators.data);
    setOperatorName("");

    setIsLoading(false);
  };

  return (
    <Container>
      <Modal>
        <div className="header">
          <p>IMPORT CLIENTS (.csv)</p>
          <IoMdClose size={25} onClick={handleClose} />
        </div>
        <div className="content">
          <input
            placeholder="Digite o nome do novo operador"
            value={operatorName}
            onChange={(evt) => handleFileChange(evt)}
          />
          <SecondaryButton onClick={handleCreateOperator}>
            {isLoading ? <AiOutlineLoading3Quarters size={13} /> : "Create"}
          </SecondaryButton>
        </div>
      </Modal>
    </Container>
  );
}
