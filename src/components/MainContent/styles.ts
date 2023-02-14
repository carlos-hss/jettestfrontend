import styled, { keyframes } from "styled-components";

const Loading = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
  width: 90%;
  height: 90%;
  max-width: 800px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white);
  border-radius: 2rem;
  padding: 2% 3%;
  gap: 3%;
  box-shadow: 0px 0px 12px -1px rgba(113, 113, 113, 0.75);
  -webkit-box-shadow: 0px 0px 12px -1px rgba(113, 113, 113, 0.75);
  -moz-box-shadow: 0px 0px 12px -1px rgba(113, 113, 113, 0.75);
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3%;
`;

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  font-size: 0.75rem;
  font-weight: 700;
  border: none;
  border-radius: 0.75rem;
  color: var(--gray2);
  background-color: var(--gray1);
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  padding: 10px 20px;
  font-size: 0.75rem;
  font-weight: 700;
  border: none;
  border-radius: 0.75rem;
  color: var(--gray1);
  background-color: var(--gray2);
  cursor: pointer;
  transition: 0.2s ease-in-out;

  svg {
    animation: 0.6s ${Loading} infinite linear;
  }
`;

export const OperatorList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray2);
    transition: 0.2s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray1);
  }
`;
