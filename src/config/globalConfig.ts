export enum Skills {
  React,
  Redux,
  TypeScript,
  JavaScript,
  Accessibility,
  HTML5,
  CSS3
}

export enum SocialProfiles {
  Github = "https://github.com/hardikjain0309",
  LinkedIn = "https://www.linkedin.com/in/hardikjain96/"
}

export enum Companies {
  Nutanix = "Nutanix",
  Microsoft = "Microsoft"
}

export const globalConfig = {
  profile: {
    initials: "H.J.",
    name: "Hardik Jain",
    jobTitle: "Front-end Developer",
    currentCompany: Companies.Nutanix,
    location: "Bangalore, India" 
  },
  workInfo: {
    currentTeam: "Nutanix Move",
    currentSideProject: "This Dev Portfolio",
    experienceInYears: "7",
    numTeams: "3",
    numCompanies: "2",
    skills: [
      Skills.React,
      Skills.Redux,
      Skills.TypeScript,
      Skills.JavaScript,
      Skills.Accessibility,
      Skills.HTML5,
      Skills.CSS3
    ],
    companies: [
      Companies.Nutanix,
      Companies.Microsoft
    ]
  },
  about: {
    summary: "With over seven years of experience, I currently work at Nutanix in Bangalore, building modern web applications with React. I love creating smooth, responsive user experiences — and I’m especially passionate about writing code that’s scalable, high-performing, and easy to maintain. While front-end is where I thrive, I’ve also explored Azure cloud, done a bit of backend development, and I’m on a steady path toward becoming a full-stack developer. I enjoy learning new things and contributing to projects that make a difference."
  }
}