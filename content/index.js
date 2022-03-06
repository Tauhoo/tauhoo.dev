const tags = {
  HTML: 'HTML',
  SVG: 'SVG',
  Hardware: 'Hardware',
  Quartus: 'Quartus',
  React: 'React',
  Webpack: 'Webpack',
  Blockchain: 'Blockchain',
  Terra: 'Terra',
  CosmWasm: 'CosmWasm',
}

export const blogs = {
  topic: 'Blogs',
  text: "These are my article about what I'm learning or interested.",
  posts: [
    {
      title: 'Basic SVG for web development #1',
      detail: `I have tried to make some fantasy stuff on my website. For example circular progress bars and some animated logo. Then I realized that SVG is the solution and very useful. So I want to share my discoveries.`,
      src: '/content/blogs/0.jpg',
      link: 'https://dev.to/tauhoo/basic-svg-for-web-development-1-dif',
      tag: [tags.HTML, tags.SVG],
      key: '0',
    },
    {
      title: 'Quartus Prime Lite tutorial # 1 Installation',
      detail:
        'This story is the record of my Quartus learning progress. I’m also a beginner for Quartus and hardware stuff. And I notice that there aren’t much of Quartus tutorials. So I want to share my experience with you.',
      src: '/content/blogs/1.jpeg',
      link: 'https://medium.com/@tauhoo/quartus-prime-lite-tutorial-1-installation-5aa3e39be54c',
      tag: [tags.Hardware, tags.Quartus],
      key: '1',
    },
    {
      title: 'Basic CosmWasm development environment set up for Terra',
      detail:
        'The goal of this article is to share the steps to set up a CosmWasm project for Terra from my experience. If you have any suggestions, feel free to comment.',
      src: '/content/blogs/2.jpeg',
      link: 'https://medium.com/@tauhoo/basic-cosmwasm-development-environment-set-up-for-terra-33897197e035',
      tag: [tags.Blockchain, tags.Terra, tags.CosmWasm],
      key: '2',
    },
    // {
    //   title: "ทำ Server side rendering กับ create-react-app แบบง่ายๆ",
    //   detail:
    //     "บทความนี้จะสอนว่าจะทำ Server side rendering ( SSR) กับ create-react-app เป็นวิธีที่ผมทดลองทำด้วยตัวเอง เลยอยากแชร์ให้ทุกคนดู",
    //   src: "/content/blogs/2.jpeg",
    //   link:
    //     "https://medium.com/@tauhoo/%E0%B8%97%E0%B8%B3-server-side-rendering-%E0%B8%81%E0%B8%B1%E0%B8%9A-create-react-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-458ae56df07d",
    //   tag: [tags.React, tags.Webpack],
    //   key: "3",
    // },
  ],
}

export const profile = {
  topic: 'Profile',
  text: 'Let’s me introduce myself.',
  posts: [
    {
      title: 'Who am I?',
      detail:
        "I'm wachirawit wacharak. You can call me Ice. I'm studying at Kasetsart University and my major is computer engineering.",
      key: '0',
    },
    {
      title: 'What am I interested?',
      detail:
        'I am interested in software development because I want to create some cool software, framework, or library. I have plans to do it but I need more knowledge about software design and others',
      key: '1',
    },
    {
      title: 'Why do I create this website?',
      detail:
        'I create this website for 2 reasons. First, I want to provide my article here because I usually write articles to improve my knowledge. Second I want to show you my profile and my experience.',
      key: '2',
    },
    {
      title: 'What can I do?',
      detail:
        "I am good at web technology both frontend,  backend, and database design. I also have some experience with Java, Go, and Hardware development (Actually, it's my senior project).",
      key: '3',
    },
  ],
}

export const experience = {
  topic: 'Profile',
  text: 'Let’s me introduce myself.',
  years: [
    {
      year: '2017',
      posts: [
        {
          title: 'HeroCraft Network',
          detail:
            'I start to create minecreaft server with my friends. I have chance to develop plugin and use command line on linux server.',
          src: '/content/experience/0.png',
          key: '0',
        },
        {
          title: 'PluginCraft',
          detail:
            'I open facebook page so people could hire me to develop Minecraft plugin.',
          src: '/content/experience/1.png',
          key: '1',
        },
        {
          title: 'Going to the University',
          detail:
            'I go to the university so I have to close the minecraft server and facebook page.',
          src: '/content/experience/2.png',
          key: '2',
        },
      ],
    },
    {
      year: '2018',
      posts: [
        {
          title: 'Barcamp Bangken',
          detail:
            "I volunteer to create a website for an event called Barcamp Bangken. It's an event that allows everyone to do a talk to share their knowledge and experience.",
          src: '/content/experience/3.jpg',
          key: '0',
        },
        {
          title: 'KU Korean',
          detail:
            "I was hired by a professor of faculty of humanities to create a website for online korean language studying. It's my first large scale web application that I create. I design and develop whole system such as frontend, backend, database, and deployment.",
          src: '/content/experience/4.png',
          key: '1',
        },
        {
          title: 'Abacuz Developer Group',
          detail:
            'I run a club at university with my friends. It is for people from any faculty to share thier knowledge and do some software togeter. ',
          src: '/content/experience/7.png',
          key: '2',
        },
        {
          title: 'Web For Fun',
          detail:
            'It is the first hackathon of Abacuz Developer Group. It is an event that people will develop a website with their team in 2 days. Moreover, They can do a talk to share their knowledge with others at any time.',
          src: '/content/experience/8.jpeg',
          key: '3',
        },
      ],
    },
    {
      year: '2020',
      posts: [
        {
          title: 'Intern at Innovative Software Consulting',
          detail:
            'I was an intern as a software engineer. I have the chance to use many tools such as Golang, Spring framework, Android, etc. I was appointed to create a queueing software and notification react native library',
          src: '/content/experience/5.jpg',
          key: '0',
        },
      ],
    },
    {
      year: '2021',
      posts: [
        {
          title: 'Senior project',
          detail:
            'I create specific arcitecture hardware for neural network algoritm so that is why I also have some an experience to develop hardware.',
          src: '/content/experience/6.jpeg',
          key: '1',
        },
      ],
    },
  ],
}
