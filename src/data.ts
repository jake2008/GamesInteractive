import { EthosPoint, Experience, Project } from "./types";

export const ETHOS_POINTS: EthosPoint[] = [
  {
    id: "e1",
    title: "Respect Player Time",
    description: "We design experiences that fit into lives, not consume them. No endless grinds or predatory retention mechanics.",
    iconName: "Clock",
    color: "bg-brand-mint/20 text-brand-mint",
  },
  {
    id: "e2",
    title: "Transparent Monetization",
    description: "Pay for the game, play the game. We reject loot boxes, pay-to-win mechanics, and hidden costs.",
    iconName: "ShieldCheck",
    color: "bg-brand-purple/20 text-brand-purple",
  },
  {
    id: "e3",
    title: "Inclusive by Design",
    description: "Accessibility isn't an afterthought. We build games that everyone can enjoy, regardless of ability.",
    iconName: "HeartHandshake",
    color: "bg-brand-yellow/20 text-yellow-600",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "siege-worlds",
    title: "Siege Worlds",
    category: "Horde Shooter",
    description: "A fast-paced horde shooter paying out rewards to players.",
    fullDescription: "Dive into Siege Worlds, an adrenaline-pumping horde shooter where your survival skills translate directly into real rewards. Face down endless waves of relentless enemies, upgrade your arsenal, and conquer dynamic battlegrounds in this high-stakes test of endurance. Perfect your strategy and reap the benefits of your victories.",
    imageUrl: "/assets/img/sw.png",
    color: "bg-red-100",
    youtubeId: "eETpfxaWEU4",
    awards: ["3rd Best Shooter Game (Play to Earn Awards)", "Grant Funding from Divi Project", "Grant Funding from Alien Worlds"],
    stats: [
      { label: "Accounts", value: "6k+" },
      { label: "Paid to Players", value: "$150k" },
      { label: "Monsters Killed", value: "33M" }
    ]
  },
  {
    id: "rawbots",
    title: "Rawbots",
    category: "Educational Sandbox",
    description: "An educational sandbox game where you can program your own robots.",
    fullDescription: "Rawbots is an immersive educational sandbox that puts you in the role of a robotics engineer. Design, assemble, and program your own unique robots using a visual programming interface. Solve complex engineering puzzles, automate tasks, and battle other creations. It's the ultimate playground where creativity meets logic, teaching real-world programming concepts through engaging gameplay.",
    imageUrl: "/assets/img/rawbots.png",
    color: "bg-blue-100",
    youtubeId: "dspHcwebBdI"
  },
  {
    id: "earth-defenders",
    title: "Earth Defenders",
    category: "Sustainability Simulator (In Development)",
    description: "A game focused on sustainability and planting trees.",
    fullDescription: "Earth Defenders is an ambitious upcoming Sandbox MMO focused on regenerative gaming. Step into a massive, persistent world where players are jointly responsible for healing the planet. Train skills, trade resources, and collaborate to solve real-world environmental issues. The core mission of the game extends beyond the digital realm—in-game actions directly contribute to planting real-world trees, making every player a true Earth Defender.",
    imageUrl: "/assets/img/earthdefenders.jpg",
    color: "bg-green-100",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "ex1",
    role: "Founder & CEO",
    company: "Games Interactive",
    period: "2020 - Present",
    description: "Established a gaming studio dedicated to creating games with a positive impact. We've successfully partnered with clients to raise over $2 million, secured a top-3 award for best shooter game on PlayToEarn.com, and we're just getting started.",
  },
  {
    id: "ex2",
    role: "Lecturer in Computer Games Technology",
    company: "Birmingham City University",
    period: "2017 - 2020",
    description: "Taught game engine development in C++ while pioneering research into serious games for healthcare. Developed a published VR training application for doctors, earning the Dean's prize for innovative research and multiple best paper awards.",
  },
  {
    id: "ex3",
    role: "Lead Software Engineer",
    company: "Live 5 Gaming",
    period: "2016 - 2017",
    description: "Architected and built the core game engine for a startup gambling studio, publishing titles to major platforms including Sky Vegas, Ladbrokes, and Buzz Bingo. This experience catalyzed my passion for sustainable gaming, as I fundamentally disagreed with the predatory nature of gambling mechanics.",
  }
];
