import React from 'react';
import { VscTwitter } from 'react-icons/vsc';
import { FaLinkedinIn, FaLink, FaGithub, FaUserCircle } from 'react-icons/fa';
import Link from './components/Link/Link';
import User from './components/User/User';

function App() {
  React.useEffect(() => {
    // setting up the background color
    document.body.style.backgroundColor = '#FAA4A5';
  }, []);

  return (
    <div className="h-full md:h-full md:mt-20 mt-20">
      <div className="flex h-full md:h-full md:mt-20 justify-center items-center">
        <div>
          <User
            name="Abhay Goswami"
            intro="
          <p>Hi, I am from 🇮🇳, Senior Software Developer <a href='https://justdial.com' target='__blank__' style='color: white; font-weight: bold'>@Justdial</a><p>"
            imageURL="https://i.ibb.co/tCj3n7X/pf-n-3.png"
          />
          <Link
            links={[
              {
                index: 1,
                name: 'Twitter',
                url: 'https://bit.ly/nikk_twitter',
                icon: <VscTwitter />,
                isNested: false,
              },
              {
                index: 2,
                name: 'Github',
                url: 'https://bit.ly/nikk_dev',
                icon: <FaGithub />,
                isNested: true,
              },
              {
                index: 3,
                name: 'LinkedIn',
                url: 'https://bit.ly/nikk_linkedin',
                icon: <FaLinkedinIn />,
                isNested: false,
              },
              {
                index: 4,
                name: 'Resume',
                url: 'https://bit.ly/nikk_latest_resume',
                icon: <FaLink />,
                isNested: false,
              },
              {
                index: 5,
                name: 'Connect',
                url: "mailto:abhaygoswami676@gmail.com?subject=Hey, Abhay let's connect for a quick call",
                icon: <FaUserCircle />,
                isNested: false,
              },
            ]}
          />
        </div>
      </div>
      {/* <Promotion /> */}
    </div>
  );
}

export default App;
