import React from "react";
import { AccordionContent, AccordionTitle, Container } from "./styles";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IOperatorAccordionProps } from "./operatorAccordion.structure";
import { Context } from "../../context";

export default function OperatorAccordion({
  id,
  name,
  clients,
}: IOperatorAccordionProps) {
  const { selectedOperator, setSelectedOperator } = React.useContext(Context);

  const handleSelectAccordion = () => {
    if (selectedOperator === id) {
      setSelectedOperator("");
    } else {
      setSelectedOperator(id);
    }
  };

  return (
    <Container>
      <AccordionTitle isActive={selectedOperator === id}>
        <div>
          <p>OPERATOR</p>
          <small>{name}</small>
        </div>
        <IoIosArrowDropupCircle size={20} onClick={handleSelectAccordion} />
      </AccordionTitle>
      <AccordionContent isActive={selectedOperator === id} clients={clients}>
        {clients ? (
          clients.map((client, index) => (
            <div className="client" key={index}>
              <p>{client.name}</p>
              <small>{client.email}</small>
              <small>{client.birthDate}</small>
            </div>
          ))
        ) : (
          <p className="alert">No client found</p>
        )}
      </AccordionContent>
    </Container>
  );
}
