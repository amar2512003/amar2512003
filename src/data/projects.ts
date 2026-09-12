export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  links: { github?: string; demo?: string }
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    id: 'smartcity-grievance-portal',
    title: 'Samadhan',
    description:
      'Built a civic grievance platform enabling citizens to report issues with photo evidence and precise GPS location, automatically route complaints to the relevant municipal body/district, and track grievance status through a citizen dashboard. Includes OTP-based authentication, admin dashboard with district filtering, status management, Google Maps integration, and an AI-powered citizen assistant with scope guardrails.',
    stack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'Knex.js', 'JWT', 'Nodemailer', 'Groq API'],
    links: {
      github: 'https://github.com/amar2512003/SmartCity_complaint_portal',
      demo: 'https://smartcity-frontend-virid.vercel.app/citizen/login',
    },
    screenshots: [
      '/screenshots/smartcity/01.jpg',
      '/screenshots/smartcity/02.jpg',
      '/screenshots/smartcity/03.jpg',
      '/screenshots/smartcity/04.jpg',
      '/screenshots/smartcity/05.jpg',
      '/screenshots/smartcity/06.jpg',
      '/screenshots/smartcity/07.jpg',
    ],
  },
  {
    id: 'whowins2029',
    title: 'Who Wins 2029',
    description:
      'ML-powered election prediction platform forecasting state-wise Lok Sabha winners with Random Forest models trained on historical election data. Interactive Shiny dashboard with GIS-based India maps, seat trends, and party-wise analytics built on Plotly and GeoJSON.',
    stack: ['R', 'Shiny','ggplot2','GeoJSON','sf','Plotly'],
    links: {
      github: 'https://github.com/amar2512003/WhoWins2029',
      demo: 'https://whowins2029.netlify.app/',
    },
    screenshots: [
      '/screenshots/whowins2029/01.jpg',
      '/screenshots/whowins2029/02.jpg',
      '/screenshots/whowins2029/03.jpg',
      '/screenshots/whowins2029/04.jpg',
      '/screenshots/whowins2029/05.jpg',
      '/screenshots/whowins2029/06.jpg',
      '/screenshots/whowins2029/07.jpg',
      '/screenshots/whowins2029/08.jpg',
      '/screenshots/whowins2029/09.jpg',
    ],
  },
  {
    id: 'ai-surveillance',
    title: 'AI Surveillance Platform',
    description:
      'Real-time detection and tracking system using YOLOv8 and ByteTrack, with restricted-zone intrusion alerts, loitering analysis, and optional DeepFace recognition. Scalable FastAPI + React stack with PostgreSQL persistence and Docker-based deployment.',
    stack: ['FastAPI', 'YOLOv8','ByteTrack','DeepFace','OpenCV','PostgreSQL'],
    links: {
      github: 'https://github.com/amar2512003/Smart_Surveillance_System',
    },
  },
  {
    id: 'kolmetro',
    title: 'Kolkata Metro Route Planner',
    description:
      'Built and deployed an interactive Kolkata Metro route planner rendering real station locations on a dotted-line network map using Leaflet.js and OpenStreetMap tiles across all 5 metro lines. Implemented shortest-path route finding with estimated fare calculation, gate-wise exit information for each station, and geolocation-based nearest-station lookup.',
    stack: ['JavaScript', 'Leaflet.js', 'OpenStreetMap'],
    links: {
      github: 'https://github.com/amar2512003/kolmetro',
      demo: 'https://kolmetro.netlify.app/',
    },
    screenshots: [
      '/screenshots/kolmetro/01.jpg',
      '/screenshots/kolmetro/02.jpg',
      '/screenshots/kolmetro/03.jpg',
      '/screenshots/kolmetro/04.jpg',
      '/screenshots/kolmetro/05.jpg',
    ],
  },
  {
    id: 'goppo',
    title: 'Goppo',
    description:
      'Full-stack real-time communication platform supporting one-to-one messaging, audio calls, and video calls using WebRTC and Socket.IO. Implemented Clerk authentication, online and offline presence detection, instant messaging, responsive UI, global state management with Zustand, and Dockerized deployment on Render.',
    stack: ['React', 'Node.js', 'WebRTC','Socket.io','Zustand','Docker'],
    links: {
      github: 'https://github.com/amar2512003/golpo',
      demo: 'https://goppoo.netlify.app/',
    },
    screenshots: [
      '/screenshots/goppo/01.jpg',
      '/screenshots/goppo/02.jpg',
      '/screenshots/goppo/03.jpg',
      '/screenshots/goppo/04.jpg',
      '/screenshots/goppo/05.jpg',
    ],
  },
  {
    id: 'football-match-analysis',
    title: 'Football Match Analysis System',
    description:
      'Built an end-to-end computer vision pipeline to detect, track, and analyze players, referees, and the ball in football broadcast footage using a custom-trained YOLOv8 model fine-tuned on a Roboflow dataset, with ByteTrack for persistent multi-object tracking across frames. Implemented automatic team classification via K-Means clustering on jersey colors and a proximity-based ball-possession algorithm to compute live team ball-control statistics.',
    stack: ['Python', 'YOLOv8', 'OpenCV','ByteTrack'],
    links: {
      github: 'https://github.com/amar2512003/FIFA26',
    },
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'Android expense tracking application built with Kotlin to help users record, organize, and manage their daily expenses through a simple and intuitive interface. Includes a dedicated web page for project information and easy access to the application.',
    stack: ['Kotlin', 'Android'],
    links: {
      github: 'https://github.com/amar2512003/expense-tracker-site',
      demo: 'https://expense-tracker-site-eight.vercel.app/',
    },
    screenshots: [
      '/screenshots/expense-tracker/01.jpg',
      '/screenshots/expense-tracker/02.jpg',
      '/screenshots/expense-tracker/03.jpg',
    ],
  },
]
