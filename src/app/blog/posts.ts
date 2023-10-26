import {Post} from "./post";

const Posts: Post[] = [
  {
    id: 1,
    title: "My First Post",
    author: "Dean Luckham",
    created: new Date(2023, 9, 26),
    imgURL: "../../../assets/img/151.JPG",
    previewImgURL: "../../../assets/img/152.JPG",
    content: "<div class='post-content'>" +
      "<p><em>Hey,</em> my name is Dean and this is my blog where I'll be talking about my time" +
      " studying with the Open University, modules, exams and everything else, and my software and web " +
      "development journey, including the development of this site. I've just got this blog up and " +
      "running so this is my first ever post here!</p>" +
      "<h2>About Me</h2>" +
      "<p></p>" +
      "</div>",
    previewContent: "<p><em class='text-secondary font-bold'>Hey,</em> my name is Dean and this is my blog where I'll be talking about my time" +
      " studying with the Open University, modules, exams and everything else, and my software and web " +
      "development journey, including the development of this site.</p>",
    tags: [
      "#Development",
      "#OU",
      "#TM111",
      "#TM112",
      "#Personal",
    ],
  },
]

export default Posts
