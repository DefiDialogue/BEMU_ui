import React, { MouseEvent } from "react";
import styled from "styled-components";
import Flex from "components/Box/Flex";
import { MotionBox } from "components/Box";
import { ArrowBackIcon, CloseIcon } from "components/Svg";
import { IconButton } from "components/Button";
import { ModalProps } from "./types";

export const mobileFooterHeight = 73;

export const ModalHeader = styled(Flex)<{ background?: string; headerBorderColor?: string }>`
  align-items: center;
  background: transparent;
  display: flex;
  padding: 20px 20px 0px 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    background: ${({ background }) => background || "transparent"};
  }
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(90vh - ${mobileFooterHeight}px);
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    max-height: 90vh;
  }
`;

export const ModalCloseButton: React.FC<React.PropsWithChildren<{ onDismiss: ModalProps["onDismiss"] }>> = ({
  onDismiss,
}) => {
  return (
    <IconButton
      variant="text"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDismiss?.();
      }}
      aria-label="Close the dialog"
    >
      <CloseIcon color="text" width="24px" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<React.PropsWithChildren<{ onBack: ModalProps["onBack"] }>> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(MotionBox)`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  border-radius: 12px 12px 0px 0px;
  width: 100%;
  max-height: calc(var(--vh, 1vh) * 100);
  z-index: ${({ theme }) => theme.zIndices.modal};
  position: absolute;
  bottom: 0;
  max-width: none !important;
  // min-height: 80vh;

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    position: auto;
    bottom: auto;
    border-radius: 20px;
    max-height: 100vh;
  }
` as typeof MotionBox;
