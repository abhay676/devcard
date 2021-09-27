import React from 'react';
import { Avatar, Heading } from '@chakra-ui/react';

type UserType = {
  imageURL?: string;
  name: string;
  intro: string;
};

const User: React.FunctionComponent<UserType> = ({ imageURL, name, intro }) => {
  return (
    <div className="text-center mb-4">
      <Avatar
        size="2xl"
        name={name}
        src={imageURL}
        className="transform transition duration-500 hover:scale-125"
        loading="lazy"
      />
      <Heading as="h2" size="2xl" className="mt-4 mb-2 ">
        {name}
      </Heading>
      <div
        className="mt-4 p-2 text-lg text-black mr-2 ml-2 justify-center items-center"
        dangerouslySetInnerHTML={{ __html: intro }}
      ></div>
    </div>
  );
};

export default User;
