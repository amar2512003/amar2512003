export interface Experience {
  id: string
  role: string
  org: string
  location: string
  period: string
  points: string[]
  certificate?: string
  certificateType?: 'pdf' | 'image'
}

export const experiences: Experience[] = [
  {
    id: 'iit-jammu',
    role: 'AI Intern — Computer Vision and Deep Learning',
    org: 'IIT Jammu',
    location: 'Jammu, India',
    period: '2026',
    points: [
      'Worked on object detection and multi-object tracking pipelines using YOLOv8.',
      'Applied transfer learning and dataset fine-tuning to build models for real-time video analysis.',
    ],
    certificate: '/certificate-iitj.png',
    certificateType: 'image',
  },
  {
    id: 'iocl',
    role: 'Intern — Comprehensive Study of Loyalty Program',
    org: 'Indian Oil Corporation Limited (IOCL)',
    location: 'Kolkata, India',
    period: '2024',
    points: [
      'Conducted research on customer loyalty programs across industries and proposed data-driven strategies for improving customer acquisition and retention.',
    ],
    certificate: '/certificate-iocl.pdf',
    certificateType: 'pdf',
  },
]
