import {Post} from "./post";

const Posts: Post[] = [
  {
    id: 1,
    title: "My First Blog Post",
    author: "Dean Luckham",
    created: new Date(2023, 9, 26),
    previewImgURL: "../../../assets/img/152.JPG",
    content: "<div class='post-content'>" +
      "<p><em>Hey,</em> my name is Dean and this is my blog where I'll be talking about my time" +
      " studying with the Open University, modules, exams and everything else, and my software and web " +
      "development journey, including the development of this site. I've just got this blog up and " +
      "running so this is my first ever post here!</p>" +
      "<h2>About Me</h2>" +
      "<p>I'm currently studying part-time with the Open University working towards BSc Computing & IT (Software). " +
      "I have some prior experience programming from self-teaching over the years including Python, C++, " +
      "Java, Kotlin, Javascript and Typescript. I started developing this site as a personal project to develop " +
      "my knowledge and skills, it's constantly under development and I'm always looking at new things I can add " +
      "or things that I can improve.</p><p>In my free time away from my computer I'm normally enjoying the south downs " +
      "by bike or foot, exploring and slaying monsters in the Kingdom of Hyrule, or staying fresh and splatting squids in Splatsville.</p>" +
      "<h2>Open University</h2>" +
      "<p>I started my studies with the Open University earlier this year, and I'm currently partway through my second " +
      "module. I'm planning to talk here about my experiences studying with the OU, what I think of the modules and material, " +
      "how I'm finding the exams, and anything else I feel like discussing.</p>" +
      "<h3>TM111</h3>" +
      "<p>The first module of the Computing & IT degree is <a href='https://www.open.ac.uk/courses/modules/tm111'>TM111 - Introduction to Computing and Information Technology 1</a>. " +
      "As the name suggests this serves as a basic introduction to the subject covering things like the development of " +
      "the computer, basic HTML, programming in OU Build (the OU's lightly modified version of Scratch), and network and " +
      "internet technologies.</p><p>It seems to serve its purpose just fine and gives a good overview of the basic concepts, " +
      "the OU needs these modules to bring everyone up to speed because of the variety of student backgrounds. " +
      "This does mean though that for those with prior experience or qualifications in IT this will likely be a very easy " +
      "and dull module. I got through the material easily and quickly and blazed through the TMAs without any issues " +
      "(well, except for losing marks for not showing enough of the really basic working in maths questions, damn you A-Level Further Maths!) " +
      "and passed the module with a Distinction.</p><p>One down, many more to go.</p>" +
      "<h3>TM112</h3>" +
      "<p><a href='https://www.open.ac.uk/courses/modules/tm112'>TM112 - Introduction to Computing and Information Technology 2</a> is the direct follow on from TM111 covering " +
      "more regarding technology, data and the internet. This module also focuses heavily on programming in Python. Similarly " +
      "to TM111 previous experience in the area will make this a breeze, which is allowing me to get a good headstart. " +
      "I am noticing though that a good number of people are struggling with binary and Python and I can understand " +
      "where they're coming from, the OU material is quite lacking and doesn't do a great job of explaining many of the " +
      "concepts, so you need to be able to find the information you need online, a critical skill to develop.</p>" +
      "<p>TMA01 is due in a couple of weeks time and I've already completed it. There were some questions on " +
      "scientific notation, binary arithmetic, some small coding problems and one slightly larger one which I expect some " +
      "with no prior Python experience will struggle with.</p>" +
      "<p>Next up are <a href='https://www.open.ac.uk/courses/modules/tm129'>TM129 - Technologies in practice</a> & <a href='https://www.open.ac.uk/courses/modules/mst124'>MST124 - Essential mathematics 1</a> which I'm looking forward to " +
      "and should serve as a good refresher of my A-Level maths.</p><p><br></p><p>That's all I have for now, thanks for joining " +
      "me on my journey. Now it's time to get back to work.</p>" +
      "</div>",
    previewContent: "<p><em class='text-secondary font-bold'>Hey,</em> my name is Dean and this is my blog where I'll be talking about my time" +
      " studying with the Open University, modules, exams and everything else, and my software and web " +
      "development journey, including the development of this site.</p>",
    tags: [
      "Development",
      "OU",
      "TM111",
      "TM112",
      "Personal",
    ],
  },
]

export default Posts
