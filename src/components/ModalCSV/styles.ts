import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(113, 113, 113, 0.4);
`;

export const Modal = styled.div`
  width: 90%;
  height: 90%;
  max-width: 400px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  background-color: var(--white);

  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

    p {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--gray2);
    }

    svg {
      color: var(--gray2);
      cursor: pointer;
    }
  }

  .content {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ::-webkit-file-upload-button {
        padding: 10px 20px;
        font-size: 0.75rem;
        font-weight: 700;
        border: none;
        border-radius: 0.75rem;
        color: var(--gray2);
        background-color: var(--gray1);
        cursor: pointer;
      }
    }
  }
`;
