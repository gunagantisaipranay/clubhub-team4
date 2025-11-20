export interface Club {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  members: number;
  image?: string;
  nextEvent?: string;
  meetingSchedule: string;
  faculty: string;
  requirements: string[];
}

export const clubsData: Club[] = [
  {
    id: "robotics",
    name: "Robotics Club",
    description: "Build, program, and compete with robots in regional and national competitions.",
    fullDescription: "The Robotics Club is dedicated to fostering innovation and technical skills through hands-on robotics projects. Members learn programming, mechanical design, and teamwork while preparing for exciting competitions like FIRST Robotics and VEX.",
    category: "STEM",
    members: 45,
    nextEvent: "Mar 15",
    meetingSchedule: "Every Tuesday and Thursday, 3:30-5:30 PM",
    faculty: "Mr. SAI",
    requirements: ["Interest in engineering", "Basic programming knowledge helpful but not required"],
  },
  {
    id: "debate",
    name: "Debate Team",
    description: "Develop critical thinking and public speaking skills through competitive debate.",
    fullDescription: "Our award-winning Debate Team competes in local, state, and national tournaments. Members learn argumentation, research skills, and public speaking while discussing current events and policy issues.",
    category: "Academic",
    members: 32,
    nextEvent: "Mar 20",
    meetingSchedule: "Every Monday and Wednesday, 4:00-6:00 PM",
    faculty: "Mr. James Mitchell",
    requirements: ["Strong interest in current events", "Commitment to attend tournaments"],
  },
  {
    id: "art",
    name: "Art Club",
    description: "Express creativity through various artistic mediums and showcase your work.",
    fullDescription: "The Art Club provides a supportive environment for students to explore different artistic techniques including painting, drawing, sculpture, and digital art. We organize gallery exhibitions and participate in community art projects.",
    category: "Arts",
    members: 56,
    nextEvent: "Apr 5",
    meetingSchedule: "Every Friday, 3:00-5:00 PM",
    faculty: "Ms. Emily Chen",
    requirements: ["Passion for art", "Open to all skill levels"],
  },
  {
    id: "coding",
    name: "Coding Club",
    description: "Learn programming languages and develop software projects collaboratively.",
    fullDescription: "The Coding Club is perfect for students interested in software development, web design, and app creation. We work on group projects, participate in hackathons, and prepare for coding competitions.",
    category: "STEM",
    members: 67,
    nextEvent: "Mar 22",
    meetingSchedule: "Every Tuesday, 3:30-5:30 PM",
    faculty: "Mr. David Park",
    requirements: ["Interest in coding", "Laptop required for meetings"],
  },
  {
    id: "drama",
    name: "Drama Club",
    description: "Perform in theatrical productions and develop acting skills.",
    fullDescription: "Drama Club members participate in three major productions per year, including a fall play, winter musical, and spring showcase. Students learn acting, stagecraft, lighting, sound design, and all aspects of theater production.",
    category: "Arts",
    members: 48,
    nextEvent: "Mar 18",
    meetingSchedule: "Every Monday, Wednesday, and Thursday, 3:30-6:00 PM",
    faculty: "Mrs. Lisa Rodriguez",
    requirements: ["Commitment to rehearsal schedule", "Auditions required for lead roles"],
  },
  {
    id: "environmental",
    name: "Environmental Club",
    description: "Promote sustainability and environmental awareness on campus and beyond.",
    fullDescription: "The Environmental Club works on campus sustainability initiatives, organizes recycling programs, and participates in local conservation projects. We also host educational events about climate change and environmental protection.",
    category: "Service",
    members: 41,
    nextEvent: "Apr 1",
    meetingSchedule: "Every Thursday, 3:30-4:30 PM",
    faculty: "Dr. Rachel Green",
    requirements: ["Passion for environmental issues", "Willingness to participate in outdoor activities"],
  },
  {
    id: "music",
    name: "Music Production Club",
    description: "Create, mix, and produce original music using modern technology.",
    fullDescription: "Learn music production, mixing, and mastering techniques using industry-standard software. Members collaborate on original compositions, remixes, and soundtracks while exploring various genres and production styles.",
    category: "Arts",
    members: 29,
    nextEvent: "Mar 25",
    meetingSchedule: "Every Wednesday, 4:00-6:00 PM",
    faculty: "Mr. Alex Turner",
    requirements: ["Interest in music production", "No prior experience necessary"],
  },
  {
    id: "chess",
    name: "Chess Club",
    description: "Improve strategic thinking through competitive and casual chess play.",
    fullDescription: "The Chess Club welcomes players of all skill levels, from beginners to tournament competitors. We organize in-house tournaments, compete against other schools, and provide coaching to help members improve their game.",
    category: "Academic",
    members: 38,
    nextEvent: "Mar 19",
    meetingSchedule: "Every Tuesday and Friday, 3:30-5:00 PM",
    faculty: "Mr. Robert Williams",
    requirements: ["Basic knowledge of chess rules", "All skill levels welcome"],
  },
];

export interface Announcement {
  id: string;
  title: string;
  content: string;
  club: string;
  date: string;
  priority: "high" | "medium" | "low";
}

export const announcementsData: Announcement[] = [
  {
    id: "1",
    title: "Robotics Competition Registration Open",
    content: "Sign up for the Regional Robotics Championship by March 10th. This is a great opportunity to showcase your skills and compete against top teams from across the state.",
    club: "Robotics Club",
    date: "2024-03-05",
    priority: "high",
  },
  {
    id: "2",
    title: "Art Exhibition This Friday",
    content: "Join us for the Spring Art Exhibition featuring student works in the main gallery. Opening reception at 6 PM with refreshments.",
    club: "Art Club",
    date: "2024-03-08",
    priority: "high",
  },
  {
    id: "3",
    title: "Coding Hackathon Next Week",
    content: "24-hour hackathon starting March 22nd. Form teams of 3-4 members and build something amazing. Prizes for top projects!",
    club: "Coding Club",
    date: "2024-03-10",
    priority: "medium",
  },
  {
    id: "4",
    title: "Drama Club Auditions",
    content: "Auditions for our spring production of 'The Wizard of Oz' will be held March 18-19. Prepare a 1-minute monologue or song.",
    club: "Drama Club",
    date: "2024-03-12",
    priority: "high",
  },
  {
    id: "5",
    title: "Environmental Clean-Up Day",
    content: "Join us for our monthly beach clean-up event on April 1st. Meet at the main parking lot at 9 AM. Bring water and sunscreen!",
    club: "Environmental Club",
    date: "2024-03-14",
    priority: "medium",
  },
];
