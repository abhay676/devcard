import React from 'react';
import Repos from '../Repos/Repos';
type Link = {
  index: string | number;
  url: string;
  name: string;
  icon?: React.ReactNode;
  isNested: boolean;
  isConnect?: boolean;
};

type LinkType = {
  links: Array<Link>;
};

const LinkComponent: React.FunctionComponent<LinkType> = ({ links }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleRedirect = (isNested: boolean, url: string) => {
    if (isNested) {
      // open modal and fetch 5 github repo as per user
      setModalOpen(true);
    } else {
      return window.open(`${url}`, '__blank');
    }
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 text-center ml-4 mr-4 justify-center items-center ">
        {links.map((link) => (
          <div
            className="flex items-center justify-self-auto border-black bg-white cursor-pointer  border-2 transition duration-500"
            key={link.index}
            onClick={() => handleRedirect(link.isNested, link.url)}
          >
            <picture className="p-1 md:p-4 text-lg">{link.icon}</picture>
            <p className="font-semibold text-lg">{link.name}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Repos
          title="Latest Github Repositories"
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          githubURL="https://github.com/abhay676"
          userName="abhay676"
        />
      )}
    </React.Fragment>
  );
};

export default LinkComponent;
