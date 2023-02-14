import React from "react";
import { IModalCSVProps } from "./modalCSV.structure";
import { Container, Modal } from "./styles";
import { IoMdClose } from "react-icons/io";
import { SecondaryButton } from "../MainContent/styles";
import { api } from "../../utils/api";

export default function ModalCSV({ setIsModalCSVOpen }: IModalCSVProps) {
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

        console.log(response.data);
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
            Upload
          </SecondaryButton>
        </div>
      </Modal>
    </Container>
  );
}
