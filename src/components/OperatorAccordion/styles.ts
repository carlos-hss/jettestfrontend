import styled, { keyframes } from "styled-components";

interface IProps {
  isActive?: boolean;
}

interface IPropsContent {
  isActive?: boolean;
  clients?: Array<IClients>;
}

interface IClients {
  birthDate: string;
  created_at: Date;
  email: string;
  id: string;
  name: string;
  updated_at: Date;
}

const RotateIn = keyframes`
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const RotateOut = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(90deg);
  }
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--gray1);
  border-radius: 0.5rem;
  padding: 0 4%;
`;

export const AccordionTitle = styled.div<IProps>`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;

  div {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5%;
  }

  p {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--gray2);
  }

  small {
    font-size: 0.75rem;
    color: var(--gray2);
    text-transform: uppercase;
  }

  svg {
    color: var(--gray2);
    cursor: pointer;
    transform: rotate(90deg);
    animation: 0.2s ${({ isActive }) => (isActive ? RotateIn : RotateOut)};
    animation-fill-mode: forwards;
  }
`;

export const AccordionContent = styled.div<IPropsContent>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: ${({ isActive, clients }) =>
    isActive && clients?.length
      ? `${clients.length * 2.5}rem`
      : isActive && !clients?.length
      ? "2rem"
      : 0};
  overflow: hidden;
  transition: max-height 0.3s;
  gap: 0.5rem;
  padding-bottom: ${({ isActive }) => (isActive ? "0.5rem" : 0)};

  .alert {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray2);
  }

  .client {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray2);

    p {
      font-size: 0.75rem;
      font-weight: 700;
    }

    small {
      font-size: 0.75rem;
    }
  }
`;
