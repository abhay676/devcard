import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tag,
} from '@chakra-ui/react';
import { VscLinkExternal } from 'react-icons/vsc';

interface ReposType {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  githubURL: string;
}

const Repos: React.FunctionComponent<ReposType> = ({
  isOpen,
  onClose,
  title,
  githubURL,
}) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{githubURL}</ModalBody>
        <ModalFooter>
          <Tag
            size="lg"
            variant="solid"
            colorScheme="teal"
            onClick={() => window.open(githubURL, '__blank')}
          >
            <p className="m-2">Github Account</p> <VscLinkExternal />
          </Tag>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Repos;
