import {Post} from "./post";

import {environment} from "../../environments/environment";
const imgURL: string = environment.s3ImagesUrl

const Posts: Post[] = [
  {
    id: 1,
    title: "My First Blog Post",
    author: "Dean Luckham",
    created: new Date(2023, 9, 26),
    previewImgURL: `${imgURL}152.JPG`,
    content: `<div class='post-content'><p><em>Hey,</em> my name is Dean and this is my blog where I'll be talking about
        my time studying with the Open University, modules, exams and everything else, and my software and web development journey,
        including the development of this site. I've just got this blog up and running so this is my first ever post here!</p>
        <h2>About Me</h2>
        <p>I'm currently studying part-time with the Open University working towards BSc Computing & IT (Software).
        I have some prior experience programming from self-teaching over the years including Python, C++, Java, Kotlin,
        Javascript and Typescript. I started developing this site as a personal project to develop my knowledge and
        skills, it's constantly under development and I'm always looking at new things I can add or things that I can
        improve.</p>
        <p>In my free time away from my computer I'm normally enjoying the south downs by bike or foot, exploring and
        slaying monsters in the Kingdom of Hyrule, or staying fresh and splatting squids in Splatsville.</p>
        <h2>Open University</h2>
        <p>I started my studies with the Open University earlier this year, and I'm currently partway through my second
        module. I'm planning to talk here about my experiences studying with the OU, what I think of the modules and
        material, how I'm finding the exams, and anything else I feel like discussing.</p>
        <h3>TM111</h3>
        <p>The first module of the Computing & IT degree is
        <a href='https://www.open.ac.uk/courses/modules/tm111'>TM111 - Introduction to Computing and Information Technology 1</a>.
        As the name suggests this serves as a basic introduction to the subject covering things like the development of
        the computer, basic HTML, programming in OU Build (the OU's lightly modified version of Scratch), and network
        and internet technologies.</p><p>It seems to serve its purpose just fine and gives a good overview of the basic
        concepts, the OU needs these modules to bring everyone up to speed because of the variety of student backgrounds.
        This does mean though that for those with prior experience or qualifications in IT this will likely be a very
        easy and dull module. I got through the material easily and quickly and blazed through the TMAs without any
        issues (well, except for losing marks for not showing enough of the really basic working in maths questions,
        damn you A-Level Further Maths!) and passed the module with a Distinction.</p>
        <p>One down, many more to go.</p>
        <h3>TM112</h3>
        <p><a href='https://www.open.ac.uk/courses/modules/tm112'>TM112 - Introduction to Computing and Information Technology 2</a>
        is the direct follow on from TM111 covering more regarding technology, data and the internet. This module also
        focuses heavily on programming in Python. Similarly to TM111 previous experience in the area will make this a
        breeze, which is allowing me to get a good headstart. I am noticing though that a good number of people are
        struggling with binary and Python and I can understand where they're coming from, the OU material is quite
        lacking and doesn't do a great job of explaining many of the concepts, so you need to be able to find the
        information you need online, a critical skill to develop.</p>
        <p>TMA01 is due in a couple of weeks time and I've already completed it. There were some questions on scientific
        notation, binary arithmetic, some small coding problems and one slightly larger one which I expect some with no
        prior Python experience will struggle with.</p>
        <p>Next up are
        <a href='https://www.open.ac.uk/courses/modules/tm129'>TM129 - Technologies in practice</a>
        & <a href='https://www.open.ac.uk/courses/modules/mst124'>MST124 - Essential mathematics 1</a>
        which I'm looking forward to and should serve as a good refresher of my A-Level maths.</p>
        <p><br></p>
        <p>That's all I have for now, thanks for joining me on my journey. Now it's time to get back to work.</p></div>`,
    previewContent: `<p><em class='text-secondary font-bold'>Hey,</em> my name is Dean and this is my blog where I'll be
        talking about my time studying with the Open University, modules, exams and everything else, and my software and
        web development journey, including the development of this site.</p>`,
    tags: [
      "Development",
      "OU",
      "TM111",
      "TM112",
      "Personal",
    ],
  },
  {
    id: 2,
    title: "Land of Ice & Fire",
    author: "Dean Luckham",
    created: new Date(2023, 10, 23),
    previewImgURL: `${imgURL}PXL_20231118_154112657.jpg`,
    content: `<div class='post-content'>
        <p>Iceland is a fixture on many bucket lists, for good reason; often referred to as the land of ice & fire
        Iceland is home to everything from volcanoes to glaciers and is one of the places you can regularly see the
        Northern Lights, another bucket list item for many. I recently visited Iceland for 5 nights with my Mum & Brother,
        staying in Reykjavík for the duration of our stay with a handful of tours and activities booked.</p>
        <h3>Reykjavík, Day 1 & 2</h3>
        <p>Reykjavík is the capital city of Iceland, and the most northern capital city in the world, home to roughly
        60% of Iceland's 360,000 people. The city has stunning coastlines surrounded by mountainous peninsulas offering
        some wonderful views for a walk along the coast.</p>
        <img src="${imgURL}PXL_20231116_101443046.jpg" alt="Reykjavík city coastline">
        <p>One of Reykjavík's biggest landmarks is Hallgrímskirkja, a 74.5m tall church that towers over the relatively
        low city. For a small fee you can go to the top of the church to enjoy the view, well worth it on a clear day
        as the views are spectacular.</p>
        <img src="${imgURL}PXL_20231117_150639104.jpg">
        <p>Because of our relatively short stay and the fact that none of us drive we stayed in Reykjavík for the entire
        duration of our trip, Iceland really doesn't have public transport outside of the capital so getting around without
        a car outside of tours can be difficult. This isn't really an issue as there are a huge number of tours available
        from Reykjavík with transport included.</p>
        <p>Our first tour was a whale watching tour from Reykjavík. November is not the ideal time for whale watching in
        Iceland; the cold weather means many of the whales and dolphins aren't around, as well as making standing around
        on a boat very cold. We were lucky enough to see Billy, a young humpback whale who was known to be quite active
        in the area in previous years; Billy treated us to a great spectacle including some spectacular lunge feeding.</p>
        <img src="${imgURL}Copy of 20231116-1300-Andrea-Patrick (23).JPG" alt="Billy gives us a wave">
        <p>In the evening we had booked a Northern lights tour by bus. Iceland is relatively far south for viewing the
        northern lights, but it is still regularly possible to do so in the winter months. I'd been checking the forecast
        throughout the day and things weren't looking that great, there was a dense layer of high clouds and the aurora
        wasn't predicted to be very strong. Still, we set out on the tour hoping for the best. We drove around 45 minutes
        out of Reykjavík before stopping in a relatively dark area and hopping out to see if we could spot anyting. After
        a few minutes we noticed a faint silvery glow in the sky, long exposure photos soon confirmed that we were seeing
        the aurora borealis, the northern lights.</p>
        <img src="${imgURL}PXL_20231116_220111674.jpg" alt="The aurora borealis">
        <p>We had a few other opportunities to see the lights that night, always the same silvery glow in the night sky.
        If you're really serious about seeing the lights in their full glory then you're better off trying somewhere further
        north, but they can still be incredible in Iceland.</p>
        <h3>Golden Circle, Day 3</h3>
        <p>For day 3 we'd booked the Golden Circle tour. This is one of the most popular tour routes that almost every
        visitor to Iceland will take. There are a few different variations but they're all similar and all include some
        of the most famous sights in Iceland.</p>
        <h4>Stop 1, Kerið Crater</h4>
        <p>The tour we'd booked added Kerið crater to the usual golden circle route, a volcanic crater 55m deep and 270m
        at it's widest.</p>
        <img src="${imgURL}PXL_20231118_111216838.jpg" alt="A view across Kerið crater from the crater rim">
        <img src="${imgURL}PXL_20231118_112555024.jpg" alt="The partially frozen Kerið crater lake">
        <h4>Stop 2, Gullfoss</h4>
        <p>Iceland is quite well known for it's many waterfalls, Gullfoss, which translates as "Golden Falls", is possibly
        the most well known and one of the country's most spectacular. The name comes from the golden colour of the torrent
        of water in the sunlight as it plunges down 2 drops, the weather was a little underwhelming for us, but the
        falls are still a stunning sight.</p>
        <img src="${imgURL}PXL_20231118_124436176.jpg" alt="Gullfoss Falls from the viewing platform above">
        <h4>Stop 3, Strokkur Geyser</h4>
        <p>One of Iceland's most iconic sights is its Geysers, hot springs that occassionally discharge a huge blast of
        water and steam. Strokkur is Iceland's most active, erupting every 10 minutes or so and launching water up to 40m
        into the air. Strokkur and the surrounding hot springs are a incredible spectacle, demonstrating the power of our
        planet and Iceland's geologically active nature.</p>
        <img src="${imgURL}PXL_20231118_142929473_exported_97835.jpg" alt="Strokkur geyser erupting">
        <p>Iceland gets 30% of it's power from geothermal sources, similar to those that create hot springs, you often
        see the geothermal plants as you're travelling through the country, the other
        70% comes from hydropower meaning Iceland uses 100% renewable energy. These geysers give a look into the immense
        power that lies below our feet. It's no wonder Iceland has worked hard to harness that power.</p>
        <h4>Stop 4, Þingvellir National Park</h4>
        <p>Þingvellir is one of Iceland's most historicaly significant sites, it was the location of the Icelandic parliament
        from 930 until 1798. It is also one of the places where the rift between the tectonic plates that Iceland straddles
        can be seen most visibly, the landscape is scarred with rifts where the ground has been visibly torn apart over
        many years and the entire valley is constantly widening and sinking down.</p>
        <img src="${imgURL}PXL_20231118_154112657.jpg" alt="A sunset over Þingvellir National Park">
        <img src="${imgURL}PXL_20231118_155032571.jpg" alt="Þingvellir National Park">
        <p>Þingvellir national park is one of the most breathtaking places I have ever been with some of the most incredible
        natural beauty, and perfectly captures the essence of Iceland, an absolute must-see for anyone visiting.</p>
        <h3>Day 4, Chilling in Reykjavík</h3>
        <p>For our fourth day we didn't really have plans, so we were back in Reykjavík. We took a walk to the Icelandic
        National Museum and got some lovely views of the city on our way on this very cold morning.</p>
        <img src="${imgURL}PXL_20231119_130109422.jpg" alt="A very cold morning in Reykjavík">
        <p>In the evening I decided to pay a visit to one of the cities many public geothermal pools. While there are many
        tourist oriented geothermal pools, the most famous of which is the Blue Lagoon, it's the public pools where the
        real Icelandic culture can be found. They are cheap, clean, and have fantastic facilities. Laugardalslaug, the
        cities largest pool has a 50m outdoor pool, children pool, two waterslides, multiple hot tubs, steam rooms and
        even a mini-golf course. They're a great way to meet locals and get a feel for the pool culture that is so deeply
        rooted in Icelandic culture; or to just relax and unwind. When the temperature outside is below freezing as
        it was on my visit, the water is all the more inviting.</p>
        <h3>Day 5, The South Coast</h3>
        <p>We'd originally planned to do Snorkelling at Silfra, the "swimming between two tectonic plates" that is a
        classic activity for a trip to Iceland; but because of some medical issues I wasn't able to do it, so we changed our
        plans and booked another tour, this time of the South Coast of Iceland.</p>
        <h4>Stop 1, Skógafoss</h4>
        <p>After a long drive we first stopped at Skógafoss, one of Iceland's largest waterfalls at 60m high.
        Because of the ammount of spray from the falls a rainbow is normally visible on sunny days. Unfortunately the
        weather had taken a turn for us on this day, so we weren't able to see Skógafoss in its full glory. But that didn't
        stop us climbing the hundreds of steps to the top.</p>
        <img src="${imgURL}PXL_20231120_120943793.jpg" alt="Skógafoss">
        <h4>Stop 2, Reynisfjara Beach</h4>
        <p>Reynisfjara, commonly known as the black sand beach, is famous for its black sand a hexagonal basalt pillars
        and those are certainly striking and unique features. It's also famous for the sneaker waves that have been known
        to take the lives of tourists. The warning sign at the entrance to the beach makes the danger clear, never turn
        your back to the sea.</p>
        <img src="${imgURL}PXL_20231120_131712518.jpg" alt="Reynisfjara Beach">
        <h4>Stop 3, Sólheimajökull Glacier</h4>
        <p>Sólheimajökull was one of my favourite places we visited on this trip, and left a real impact. The glacier,
        despite being one of Iceland's smaller glaciers, is absolutely vast, incomprehensibly so, and yet it used to be
        so much bigger. Due to the rapid increase in global temperatures as a result of human activity the galcier is
        retreating by 60m per year; our tour guide recalled how the now famous lagoon that can be seen in front of the
        glacier never used to be there, instead it was all Glacier.</p>
        <img src="${imgURL}PXL_20231120_153447656.PANO.jpg" alt="Sólheimajökull Glacier">
        <p>It's hard to think of a clearer indicator of the effect of human activity on our planet's climate than this.
        While the sight is truly and incredible spectacle and undoubtedly one of the most breathtaking places I have ever
        been, it is sad to think of the effect we have had on it. It is especially sad when one considers all that Iceland
        is doing to try to protect and preserve the environment.</p>
        <p>If you're in Iceland and you are able to, visit one of the countries glaciers, see for yourself the effects
        that we are having on the environment of the planet we all share.</p>
        <h4>Stop 4, Seljalandsfoss</h4>
        <p>I said Iceland was famous for its waterfalls. Seljalandsfoss is another of Icelands famous waterfalls and
        has been featured in films, TV and music videos, there's a small cave behind the waterfall that you can access
        which provides some great photo opportunities.</p>
        <img src="${imgURL}PXL_20231120_164730802.jpg" alt="Seljalandsfoss">
        <br>
        <p>While this was an exhausting trip it was absolutely worth it.
        I will certainly be going back to Iceland one day to see what else the incredible country has to offer.</p>
        </div>`,
    previewContent: `<p>Iceland is often known as the land of ice and fire. It's a country of incredible diversity,
        from glaciers to volcanoes, black sand beaches to waterfalls. A visit is a fixture on many bucket lists, and
        this year I was able to visit.</p>`,
    tags: [
      "Personal",
    ],
  },
  {
    id: 3,
    title: "Two Modules Down",
    author: "Dean Luckham",
    created: new Date(2024, 3, 30),
    previewImgURL: `${imgURL}h3kuhYUCE9A.jpg`,
    content: `<div class='post-content'>
    <p><em class='text-secondary font-bold'>Hey,</em> it's been a while since I last posted an update on my Open University studies, since then I've
    finished TM112 and have start TM129 and MST124, the last 2 level 1 modules I need to take before starting the level 2
    modules.</p>
    <h2>TM112</h2>
    <p><a href='https://www.open.ac.uk/courses/modules/tm112'>TM112 - Introduction to Computing and Information Technology 2</a>
    is the second required introductory module expanding on the content of TM111, touching on a range of areas of IT, Python,
    and the basics of cybersecurity. If you have some experience in IT, even just from personal use, you'll likely find
    most of this to be stuff you're already familiar with, so it will be quite easy.</p>
    <p>Assessment for this module takes the form of 3 TMAs (tutor marked assessments) with some practical questions
    and some more exploratory essay style questions. Me not being a huge fan of essay questions I was not too confident
    going into the TMAs, not for a lack of knowledge of the subject material. It all went better than expected however,
    as I find it often does, and I got good scores in all the assessments resulting in a Distinction for the module, making
    the score 2 for 2.</p>
    <h2>TM129</h2>
    <p><a href='https://www.open.ac.uk/courses/modules/tm129'>TM129 - Technologies in practice</a> is the third required
    level 1 module. It's broken into three blocks each focusing on a different area, Networking, Operating Systems, and
    Robotics.</p>
    <p>The networking section follows the Cisco Networking Essentials course, which provides a detailed overview of networking
    as well as some specifics regarding cisco devices, a great foundation for everyone. Later modules cover the material
    working towards a CCNA certification if you want to take that route.</p>
    <p>The operating systems block is where I am currently, it introduces a lot of people to Linux and virtualisation for the first time
    and takes a look at how operating systems work behind the scenes. The content for this block seems pretty good so far,
    although I've noticed that a lot of people who don't have experience with virtualisation or Linux have been having
    a lot more difficulty.</p>
    <p>The Robotics block is still to come and I haven't looked ahead to it much. It is contained in a Jupyter notebook
    and seems to focus heavily on Python, great for me considering I'm already quite familiar with both of these things.</p>
    <h2>MST124</h2>
    <p>For your final level 1 module you have the choice of two maths modules, <a href="https://www.open.ac.uk/courses/modules/mu123">MU123 - Discovering Mathematics</a>
    and <a href='https://www.open.ac.uk/courses/modules/mst124'>MST124 - Essential mathematics 1</a>, the former being
    roughly equivalent to GCSE level and the latter to A-Level (Maths and Further Maths). You can choose whichever module
    better matches your ability level.</p>
    <p>I studied Maths and Further Maths at A-Level, so chose MST124. The module starts with a brief recap of basic algebra
    and covers Trigonometry, Calculus, Matrices and Complex Numbers. It's definitely quite heavy and fast-paced which
    might be a struggle for some. Assessment is 4 TMA and 4 CMA (computer marked assessments, online quizzes) and a final
    exam, currently done remotely, which accounts for 80% of your overall grade. With 1 TMA and 2 CMAs down I'm currently
    at 100%, hopefully I can keep that up.</p>
    <h2>Level 2</h2>
    <p>Next up is the level 2 modules, this is the point where you need to choose which path you want to take which will
    change which modules are available to you. I've chosen the Software path and already booked onto my next module
    <a href='https://www.open.ac.uk/courses/modules/m250'>M250 - Object-oriented Java programming</a> to start in October.</p>
    <h2>Current Module Results</h2>
    <h4>Level 1</h4>
    <p>TM111 - Distinction<br>TM112 - Distinction<br>TM129 - Ongoing<br>MST124 - Ongoing</p>
    </div>`,
    previewContent: `<p><em class='text-secondary font-bold'>Hey,</em> it's been a while since I last posted an update on my Open University studies, since then I've
finished TM112 and have start TM129 and MST124, the last 2 level 1 modules I need to take before starting the level 2
modules.</p>`,
    tags: [
      "OU",
      "TM112",
      "TM129",
      "MST124",
      "Personal",
    ],
  },{
    id: 4,
    title: "New Year, New Modules",
    author: "Dean Luckham",
    created: new Date(2025, 1, 10),
    previewImgURL: `${imgURL}5mj5jLhYWpY.jpg`,
    content: `<div class='post-content'>
    <p>Wow, it's been a while!</p>
    <p>I've been busy since the last time I posted here, I've completed the first section of my OU degree, started in a
    new role in the IT industry, and got back to regularly exercising to keep myself a little healthier.</p>
    <h2>Finishing Section 1</h2>
    <p>Last time I talked about TM129 and MST124, I've now finished both.</p>
    <p><a href='https://www.open.ac.uk/courses/modules/tm129'>TM129 - Technologies in practice</a>, covered networking,
    Operating Systems and Robotics. The networking section follows Cisco's networking essentials which is great,
    but it's hard to see what value the OU offers in this section. Operating Systems gives an overview of OS concepts
    and some of the basics of Linux, but doesn't really offer much in the way of detail and doesn't give a great idea of
    what Linux can actually offer for normal, everyday users, it gives the impression that Linux is a niche OS for
    nerds, while also failing to really show how powerful it can be. Robotics is mostly discussion of social impacts and
    ethics of robotics and particularly AI, which is understandable given the current climate, meaning it's very discussion
    and essay heavy. Because of being overall very essay heavy I did not particularly enjoy it, and while passing, didn't
    do especially well. Still, at least section 1 modules don't count towards your final degree classification.</p>
    <p><a href='https://www.open.ac.uk/courses/modules/mst124'>MST124 - Essential mathematics 1</a> is the more advanced
    of the maths modules on offer, of which one is required, which is roughly equivalent to A-Level maths, dipping into
    some slightly more advanced areas too, starting with basic algebra and finishing with complex numbers.
    It's definitely only for those with maths experience but is a great module.
    The resources are excellent, tutors are very helpful and there are plenty of people in the forums willing to help.
    I have experience of A-Level maths and further maths, so I've already covered everything in this module, albeit
    10 years ago. That made it much easier than I think many found it to be, but through the resources, forums and
    tutors I think everyone found it manageable, even those without a background in maths.</p>
    <h2>Section 2</h2>
    <p>I'm starting the second section of my degree with
    <a href='https://www.open.ac.uk/courses/modules/m250'>M250 - Object-oriented Java programming</a> which for many is
    their first experience with object-oriented programming. First impressions are that this module can be a real struggle
    for those who are new to programming. The module uses Objects First with Java, just like every intro to programming
    course. While the textbook is fine and has all the basic information you need, to get a good understanding you will
    really need to read outside the textbook, look at documentation and find information for yourself. TMA01 was due a
    few weeks ago and that's exposed just how difficult many are finding this module, make sure you are ready for it
    before signing up as this module won't give you all the answers. Thanks to my previous experience I found TMA01 to
    be easy, scoring 98%, a promising start to the module.</p>
    <h2>Plus More</h2>
    <p>After almost a year out of work I started a new role in June this year in the IT industry, and I've got back into
    the pool after a cycling accident in Jan 2023. While all of this has made 2024 a busy, and at times stressful year,
    it's been great, and I'm feeling good about what the future holds. Another module is coming up soon, so time to and
    M250 continues, so things are going to get even busier.</p>
    </div>`,
    previewContent: `<p>Wow, it's been a while!</p>
    <p>I've been busy since the last time I posted here, I've completed the first section of my OU degree, started in a
    new role in the IT industry, and got back to regularly exercising to keep myself a little healthier.</p>`,
    tags: [
      "OU",
      "MST124",
      "M250",
      "Personal",
    ],
  },
]

export default Posts
