import React from 'react';
import { VscTwitter, VscOctoface } from 'react-icons/vsc';
import { FaLinkedinIn, FaLink } from 'react-icons/fa';
import Link from './components/Link/Link';
import User from './components/User/User';
import Promotion from './components/Promotion/Promotion';

function App() {
  return (
    <div className="h-full md:h-screen">
      <div className="flex h-full md:h-screen justify-center items-center">
        <div>
          <User
            name="Abhay Goswami"
            intro="
          <p>Hi, I am from
              <strong>
                  <u>INDIA</u>
              </strong>.</p>
          <p>
          </p>
          <p>
              <strong>Senior Software Developer @Justdial</strong>
          </p>
          <p>
          </p>
          <p>Passionate about startups and stocks</p>"
            imageURL="https://i.ibb.co/PNDpsB3/pf-n-3.png"
          />
          <Link
            links={[
              {
                index: 1,
                name: 'Twitter',
                url: 'https://twitter.com/nikk_xyz',
                icon: <VscTwitter />,
                isNested: false,
              },
              {
                index: 2,
                name: 'Github',
                url: 'https://github.com',
                icon: <VscOctoface />,
                isNested: true,
              },
              {
                index: 3,
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/abhay676',
                icon: <FaLinkedinIn />,
                isNested: false,
              },
              {
                index: 4,
                name: 'Blog',
                url: 'https://example.com',
                icon: <FaLink />,
                isNested: false,
              },
            ]}
          />
        </div>
      </div>
      <Promotion />
    </div>
  );
}

export default App;
