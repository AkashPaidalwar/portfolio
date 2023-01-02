import Ecommers_img1 from "./Project_Images/Ecommers/1.JPG";
import Ecommers_img2 from "./Project_Images/Ecommers/2.JPG";
import Ecommers_img3 from "./Project_Images/Ecommers/3.JPG";
import Ecommers_img4 from "./Project_Images/Ecommers/4.JPG";

import Blog_img1 from "./Project_Images/Blog/1.JPG";
import Blog_img2 from "./Project_Images/Blog/2.JPG";
import Blog_img3 from "./Project_Images/Blog/3.JPG";
import Blog_img4 from "./Project_Images/Blog/4.JPG";

import Tasklister_img1 from "./Project_Images/Tasklister/1.JPG";
import Tasklister_img2 from "./Project_Images/Tasklister/2.JPG";
import Tasklister_img3 from "./Project_Images/Tasklister/3.JPG";
import Tasklister_img4 from "./Project_Images/Tasklister/4.JPG";

const projectsData = {
  projects: [
    {
      title: "MoKart",
      description:
        "MoKart is an online shopping website that is made useing React and MongoDB",
      websiteLink: "https://mokart.cyclic.app/",
      APILink: "https://documenter.getpostman.com/view/23402501/2s8YzZRf6P",
      GitHub: "https://github.com/AkashPaidalwar/MoKart",
      videoLink: "https://www.youtube.com/watch?v=BddP6PYo2gs",
      projectImage: [
        Ecommers_img1,
        Ecommers_img2,
        Ecommers_img3,
        Ecommers_img4,
      ],
      skills: "React, MongoDB, NodeJS, Express, JavaScript, CSS",
    },
    {
      title: "Dear Public Diary",
      description: "MoKart is an online shopping website",
      websiteLink: "https://dearpublicdiary.cyclic.app/",
      APILink: " https://documenter.getpostman.com/view/23402501/2s8YzZRfFN",
      GitHub: "https://github.com/AkashPaidalwar/DearPublicDiary",
      videoLink: "https://www.youtube.com/watch?v=BddP6PYo2gs",
      projectImage: [Blog_img1, Blog_img2, Blog_img3, Blog_img4],
      skills: "React, MongoDB, NodeJS, Express, JavaScript, CSS",
    },
    {
      title: "Task Lister",
      description:
        "MoKart is an online shopping website that is made useing React and MongoDB",
      websiteLink: "https://tasklisterbyakash.cyclic.app/",
      APILink: "https://documenter.getpostman.com/view/23402501/2s8YzZRfKn",
      GitHub: "https://github.com/AkashPaidalwar/task_Lisker_App",
      videoLink: "https://www.youtube.com/watch?v=BddP6PYo2gs",
      projectImage: [
        Tasklister_img1,
        Tasklister_img2,
        Tasklister_img3,
        Tasklister_img4,
      ],
      skills: "React, MongoDB, NodeJS, Express, JavaScript, CSS",
    },
  ],
};

export default projectsData;
