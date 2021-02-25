const tags = {
  HTML: "HTML",
  SVG: "SVG",
  Hardware: "Hardware",
  Quartus: "Quartus",
  React: "React",
  Webpack: "Webpack",
}

export const blogs = {
  topic: "Blogs",
  text: "These are my article about what I'm learning or interested.",
  posts: [
    {
      title: "Basic SVG for web development #1",
      detail: `I have tried to make some fantasy stuff on my website. For example circular progress bars and some animated logo. Then I realized that SVG is the solution and very useful. So I want to share my discoveries.`,
      src: "/content/blogs/0.jpg",
      link: "https://dev.to/tauhoo/basic-svg-for-web-development-1-dif",
      tag: [tags.HTML, tags.SVG],
      key: "0",
    },
    {
      title: "Quartus Prime Lite tutorial # 1 Installation",
      detail:
        "This story is the record of my Quartus learning progress. I’m also a beginner for Quartus and hardware stuff. And I notice that there aren’t much of Quartus tutorials. So I want to share my experience with you.",
      src: "/content/blogs/1.jpeg",
      link:
        "https://medium.com/@tauhoo/quartus-prime-lite-tutorial-1-installation-5aa3e39be54c",
      tag: [tags.Hardware, tags.Quartus],
      key: "1",
    },
    {
      title: "ทำ Server side rendering กับ create-react-app แบบง่ายๆ",
      detail:
        "บทความนี้จะสอนว่าจะทำ Server side rendering ( SSR) กับ create-react-app เป็นวิธีที่ผมทดลองทำด้วยตัวเอง เลยอยากแชร์ให้ทุกคนดู",
      src: "/content/blogs/2.jpeg",
      link:
        "https://medium.com/@tauhoo/%E0%B8%97%E0%B8%B3-server-side-rendering-%E0%B8%81%E0%B8%B1%E0%B8%9A-create-react-app-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-458ae56df07d",
      tag: [tags.React, tags.Webpack],
      key: "2",
    },
  ],
}

export const profile = {
  topic: "Profile",
  text: "Let’s me introduce myself.",
  posts: [
    {
      title: "How to create React project in 3 min easily",
      detail:
        "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
      key: "0",
    },
    {
      title: "How to create React project in 3 min easily",
      detail:
        "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
      key: "1",
    },
    {
      title: "How to create React project in 3 min easily",
      detail:
        "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
      key: "2",
    },
  ],
}

export const experience = {
  topic: "Profile",
  text: "Let’s me introduce myself.",
  years: [
    {
      year: "2020",
      posts: [
        {
          title: "How to create React project in 3 min easily",
          detail:
            "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
          src:
            "https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0",
          key: "0",
        },
      ],
    },
    {
      year: "2021",
      posts: [
        {
          title: "How to create React project in 3 min easily",
          detail:
            "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
          src:
            "https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0",
          key: "0",
        },
        {
          title: "How to create React project in 3 min easily",
          detail:
            "This article is about React framework explane how good it is. This article is about React framework explane how good it is.",
          src:
            "https://www.codegrepper.com/codeimages/scroll-to-id-reactjs.png?ice=0",
          key: "1",
        },
      ],
    },
  ],
}
