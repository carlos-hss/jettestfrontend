import React from "react";
import { Context } from "../../context";
import { IOperators } from "../../context/context.structure";
import ModalCSV from "../ModalCSV";
import ModalOperator from "../ModalOperator";
import OperatorAccordion from "../OperatorAccordion";
import {
  Container,
  Header,
  OperatorList,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

export default function MainContent() {
  const { operators } = React.useContext(Context);
  const [isModalCSVOpen, setIsModalCSVOpen] = React.useState<boolean>(false);
  const [isModalOperatorOpen, setIsModalOperatorOpen] =
    React.useState<boolean>(false);

  const handleOpenModalCSV = () => {
    setIsModalCSVOpen(true);
  };

  const handleOpenModalOperator = () => {
    setIsModalOperatorOpen(true);
  };

  return (
    <Container>
      {isModalCSVOpen && <ModalCSV setIsModalCSVOpen={setIsModalCSVOpen} />}
      {isModalOperatorOpen && (
        <ModalOperator setIsModalOperatorOpen={setIsModalOperatorOpen} />
      )}
      <Header>
        <PrimaryButton onClick={handleOpenModalCSV}>
          IMPORT CLIENTS
        </PrimaryButton>
        <SecondaryButton onClick={handleOpenModalOperator}>
          ADD OPERATOR
        </SecondaryButton>
      </Header>
      <OperatorList>
        {operators.map((operator: IOperators, index) => (
          <OperatorAccordion
            id={operator.id}
            name={operator.name}
            clients={operator.clients}
            key={index}
          />
        ))}
      </OperatorList>
    </Container>
  );
}
