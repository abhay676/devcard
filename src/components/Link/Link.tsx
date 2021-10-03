import React, { Suspense, lazy } from 'react';
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

const Repos = lazy(() => import('../Repos/Repos'));

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
      <div>
        {links.map((link) => (
          <div
            className="flex items-center justify-self-auto border-black bg-white cursor-pointer  border-2 mx-4 my-4 p-2"
            key={link.index}
            onClick={() => handleRedirect(link.isNested, link.url)}
          >
            <picture className="p-1 md:p-4 md:text-2xl">{link.icon}</picture>
            <p className="font-semibold md:text-2xl">{link.name}</p>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Suspense fallback={<div>loading...</div>}>
          <Repos
            title="Latest Github Repositories"
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            githubURL="https://github.com/abhay676"
            userName="abhay676"
          />
        </Suspense>
      )}
    </React.Fragment>
  );
};

export default LinkComponent;
