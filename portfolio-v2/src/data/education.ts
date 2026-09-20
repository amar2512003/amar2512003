export interface SemesterScore {
  sem: number
  cgpa: number
}

export interface CollegeEducation {
  id: string
  school: string
  degree: string
  location: string
  period: string
  semesters: SemesterScore[]
}

export interface SchoolScore {
  label: string
  percent: number
}

export interface SchoolEducation {
  id: string
  school: string
  board: string
  location: string
  period: string
  scores: SchoolScore[]
}

export const college: CollegeEducation = {
  id: 'hit',
  school: 'Heritage Institute of Technology',
  degree: 'B.Tech, Computer Science and Engineering (Data Science)',
  location: 'Kolkata, India',
  period: '2023 – 2027',
  semesters: [
    { sem: 1, cgpa: 7.15 },
    { sem: 2, cgpa: 7.95 },
    { sem: 3, cgpa: 8.87 },
    { sem: 4, cgpa: 9.04 },
    { sem: 5, cgpa: 8.66 },
    { sem: 6, cgpa: 8.26 },
  ],
}

export const school: SchoolEducation = {
  id: 'methodist',
  school: 'Methodist School',
  board: 'ISC (Class 12) · ICSE (Class 10)',
  location: 'Dankuni, West Bengal, India',
  period: '2021 – 2023',
  scores: [
    { label: 'ISC — Class 12', percent: 85 },
    { label: 'ICSE — Class 10', percent: 93 },
  ],
}
