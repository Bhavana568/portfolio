import React from 'react';
import ProfilePic from '../assets/profilepic.jpeg';

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={ProfilePic} className="rounded-full h-52 w-52 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-gray-500 text-xl">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Bhavana Bafna</div>
          <div className="text-xl text-gray-500 font-semibold">Passionate Coder & Designer</div>
          <div className="font-light text-gray-400">
            I am Bhavana, a Pre-final year student studying Information Technology at the Pune
            Institute of Computer Technology (PICT), Pune. I have been developing web applications
            in ReactJs for the last 1 year. I have built several projects around the web using
            technologies like ReactJs. And possesses a good understanding of CS fundamentals like
            OOP and has completed one internship as a React Developer at Sorceo Tech. I'm also
            well-versed with Adobe Photoshop and Illustrator and have experience as a Graphic
            Designer for one year. Other than that I'm currently President at PICT DEBSOC.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1uqcnzN-iBzDRAuXtk9ahsV-EL7jr93Jx/view?usp=sharing'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/bhavana-bafna-2b80991a6',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/Bhavana568',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://instagram.com/bafna_bhavana123?utm_medium=copy_link',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: bhavnabafna.bb@gmail.com',
  },
];
