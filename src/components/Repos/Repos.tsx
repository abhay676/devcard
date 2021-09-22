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
  Spinner,
} from '@chakra-ui/react';
import { VscLinkExternal } from 'react-icons/vsc';
// import { formatDistance, formatRFC3339 } from 'date-fns';

interface ReposType {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  githubURL: string;
  userName: string;
}

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  private: boolean;
  description?: string;
  created_at: Date;
  updated_at: Date;
  language: string;
};

const Repo: React.FunctionComponent<GithubRepo> = ({
  name,
  html_url,
  description,
  created_at,
  language,
  updated_at,
}) => {

  return (
    <div
      className="bg-gray-100 rounded-xl p-2 mb-4 cursor-pointer"
      onClick={() => window.open(html_url, '__blank')}
    >
      <div className="flex justify-between mb-2">
        <p className="font-semibold text-center">{name}</p>
        <p className="text-red-400 font-semibold">{language}</p>
      </div>
      {description && (
        <div className="flex justify-items-start mb-2">
          <p className="font-semibold pr-2">Description: </p>
          <p className="text-gray-700">{description}</p>
        </div>
      )}

      <div className="flex justify-items-start mb-2">
        <p className="font-semibold text-center pr-2">updated:</p>
        <p className="text-gray-700">{updated_at}</p>
      </div>
    </div>
  );
};

const Repos: React.FunctionComponent<ReposType> = ({
  isOpen,
  onClose,
  title,
  githubURL,
  userName,
}) => {
  const [repos, setRepos] = React.useState<GithubRepo[] | []>([]);

  React.useEffect(() => {
    fetch(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=updated`
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        throw err;
      });
  }, [userName]);

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      autoFocus
      scrollBehavior="inside"
      closeOnEsc={false}
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {repos && repos.length > 0 ? (
            repos.map((rep) => (
              <Repo
                key={rep.id}
                id={rep.id}
                language={rep.language}
                name={rep.name}
                description={rep.description}
                html_url={rep.html_url}
                private={rep.private}
                created_at={rep.created_at}
                updated_at={rep.updated_at}
              />
            ))
          ) : (
            <Spinner className="text-center" />
          )}
        </ModalBody>
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
