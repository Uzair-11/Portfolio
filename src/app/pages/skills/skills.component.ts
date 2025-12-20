import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  backendSkills = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs'
  ];

  tools = [
    'Git',
    'GitHub',
    'VS Code',
    'Postman'
  ];
}
