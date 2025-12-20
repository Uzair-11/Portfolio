import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string;
  github?: string;
  live?: string;
}

interface Profile {
  name: string;
  link: string;
}

interface Certificate {
  title: string;
  issuer: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  /* =======================
     PROJECTS
     ======================= */
  projects: Project[] = [
    {
      title: 'Angular Portfolio SPA',
      description:
        'Personal single-page portfolio application developed after completing my bachelor’s degree to showcase projects, skills, and learning progress.',
      tech: 'Angular, TypeScript, HTML, CSS',
      github: 'https://github.com/Uzair-11',
      live: ''
    },
    {
      title: 'Theater Management System',
      description:
        'Full-stack web application for managing theater operations, including shows and bookings.',
      tech: 'MERN Stack (MongoDB, Express, React, Node.js)',
      github: '',
      live: ''
    },
    {
      title: 'Attendance Management System',
      description:
        'Web-based system designed to manage and track student attendance efficiently.',
      tech: 'HTML, CSS, JavaScript',
      github: '',
      live: ''
    },
    {
      title: 'Payment App',
      description:
        'Simple front-end payment interface focusing on UI structure and basic interactions.',
      tech: 'HTML, CSS, JavaScript',
      github: '',
      live: ''
    },
    {
      title: 'Calculator App',
      description:
        'Basic Android calculator application developed to understand mobile app fundamentals.',
      tech: 'Kotlin, Android',
      github: '',
      live: ''
    }
  ];

  /* =======================
     PROFILES
     ======================= */
  profiles: Profile[] = [
    {
      name: 'GitHub',
      link: 'https://github.com/Uzair-11'
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/shaikh_uzair_74'
    },
    {
      name: 'LinkedIn',
      link: '' // placeholder (add later)
    }
  ];

  /* =======================
     CERTIFICATES (CURATED)
     ======================= */
  certificates: Certificate[] = [
    {
      title: 'Interactivity with JavaScript',
      issuer: 'Coursera',
      link: 'https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Interactivity%20with%20JavaScript.pdf'
    },
    {
      title: 'Web and Mobile Testing with Selenium',
      issuer: 'Coursera',
      link: 'https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Web%20and%20Mobile%20Testing%20with%20Selenium.pdf'
    },
    {
      title: 'Introduction to Relational Databases',
      issuer: 'Coursera',
      link: 'https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Introduction%20to%20Relational%20Databases.pdf'
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Coursera',
      link: 'https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Foundations%20of%20Cybersecurity.pdf'
    },
    {
      title: 'Build Your First Android App',
      issuer: 'Coursera',
      link: 'https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/Build%20Your%20First%20Android%20App.pdf'
    },
    {
      title: 'C++ for C Programmers',
      issuer: 'Coursera',
      link: 'https://ik.imagekit.io/8wguvwsuie/certificates/Coursera/C++%20For%20C%20Programmers,%20Part%20A.pdf'
    }
  ];
}
