import React from "react";
import { IModalCSVProps } from "./modalCSV.structure";
import { Container, Modal } from "./styles";
import { IoMdClose } from "react-icons/io";
import { SecondaryButton } from "../MainContent/styles";
import { api } from "../../utils/api";
import { Context } from "../../context";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ModalCSV({ setIsModalCSVOpen }: IModalCSVProps) {
  const { setOperators } = React.useContext(Context);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File>();

  const handleClose = () => {
    setIsModalCSVOpen(false);
  };

  const handleFileChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      setFile(evt.target.files[0]);
    }
  };

  const handleUploadClick = async (file: File | undefined) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = async () => {
      setIsLoading(true);
      const csv = reader.result as string;

        try {
          const response = await api.post("/files", csv, {
            headers: {
              "Content-Type": "text/csv",
            },
          });

          if (!response) {
            throw new Error("Failed to upload file");
          }

          const operators = await api.get("/operators");

          setOperators(operators.data);

          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
    };
  };

  return (
    <Container>
      <Modal>
        <div className="header">
          <p>IMPORT CLIENTS (.csv)</p>
          <IoMdClose size={25} onClick={handleClose} />
        </div>
        <div className="content">
          <input type="file" accept=".csv" onChange={handleFileChange} />
          <SecondaryButton onClick={() => handleUploadClick(file)}>
            {isLoading ? <AiOutlineLoading3Quarters size={13} /> : "Upload"}
          </SecondaryButton>
        </div>
      </Modal>
    </Container>
  );
}
