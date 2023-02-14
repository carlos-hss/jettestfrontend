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
  max-height: 300px;
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
    align-items: flex-end;
    gap: 1.5rem;

    input {
      width: 100%;
      font-size: 0.875rem;
      padding: 1rem 5%;
      border: 1px solid var(--gray1);
      border-radius: 0.5rem;
      color: var(--gray2);

      ::placeholder {
        color: var(--gray2);
      }

      :focus {
        outline: none;
      }
    }
  }
`;
