import React from 'react';
import Repos from '../Repos/Repos';
type Link = {
  index: string | number;
  url: string;
  name: string;
  icon?: React.ReactNode;
  isNested: boolean;
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
      return window.open(
        `${url}?utm_source=techeclub&utm_medium=click`,
        '__blank'
      );
    }
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center ml-4 mr-4 justify-center items-center ">
        {links.map((link) => (
          <div
            className="flex items-center justify-center  bg-red-300 hover:cursor-pointer"
            key={link.index}
            onClick={() => handleRedirect(link.isNested, link.url)}
          >
            <picture className="p-2 md:p-4 text-2xl">{link.icon}</picture>
            <p className="font-semibold text-2xl">{link.name}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Repos
          title="Top Github Repositories"
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          githubURL="https://github.com/abhay676"
        />
      )}
    </React.Fragment>
  );
};

export default LinkComponent;
