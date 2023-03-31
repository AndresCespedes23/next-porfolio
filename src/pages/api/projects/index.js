/* eslint-disable import/no-anonymous-default-export */
const projects = [
  {
    logo: "https://i.imgur.com/WlSP7xN.png",
    title: "Salute",
    image: "https://i.imgur.com/QFordqF.png",
    techStack: [
      {
        title: "Next.JS",
        url: "https://i.imgur.com/peWO5yr.png",
      },
      {
        title: "Firebase",
        url: "https://i.imgur.com/1AC0Maq.png",
      },
    ],
    body: "This is a twitter-clone oriented to the healthcare system. You can do basic functions like: login with your Google Account, see the timeline, post a tweet, post a tweet with an image (for the moment, you can only drag one image per tweet). ",
    sourceCode: "https://github.com/AndresCespedes23/salute",
    liveProject: "https://salut3.vercel.app/",
  },
  {
    logo: "https://i.imgur.com/naXRqr5.png",
    title: "Bennu",
    image: "https://i.imgur.com/PCfPUCO.png",
    techStack: [
      {
        title: "react",
        url: "https://i.imgur.com/Dl60sSZ.png",
      },
      {
        title: "styled components",
        url: "https://i.imgur.com/smCjVxD.png",
      },
    ],
    body: "This is a landing page for a startup company. They wanted to lunch an NFT colecction of the World cup in Qatar 2022. It was built with React and Styled Components. It was built with a simple design that was easy to understand and use.",
    sourceCode: "https://github.com/AndresCespedes23/bennu-app",
    liveProject: "https://bennu-app.vercel.app/",
  },
  {
    logo: "https://i.imgur.com/eTKZVix.jpeg",
    title: "Equilibrar",
    image: "https://i.imgur.com/P47P0mw.png",
    techStack: [
      {
        title: "react",
        url: "https://i.imgur.com/Dl60sSZ.png",
      },
    ],
    body: "This is a website to promote the work of two argentinian agricultural engineers.",
    sourceCode: "https://github.com/AndresCespedes23/equilibr.ar",
    liveProject: "https://www.equilibr.ar/",
  },
  {
    logo: "https://i.imgur.com/EBTfe3U.png",
    title: "Crypto Tracker",
    image: "https://i.imgur.com/37Xgb0f.png",
    techStack: [
      {
        title: "react",
        url: "https://i.imgur.com/Dl60sSZ.png",
      },
    ],
    body: `This is an app that tracks the most recents prices of the #10 cryptocurrencies (for example: Bitcoin, ETH, etc). You can view the currencies in US dollars or ARG pesos.`,
    sourceCode: "https://github.com/AndresCespedes23/crypto-currency-tracker",
    liveProject: "https://crypto-currency-tracker-gray.vercel.app/",
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(projects));
};
