import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  projects: Project[] = [
    {
      image: './assets/images/khadamt.jpg',
      title: 'Khadamat (PFE)',
      description: 'Web App with Angular/Firebase',
      url: 'https://bookme-c7c73.web.app/',
    },
    {
      image: './assets/images/marvel_hero.jpg',
      title: 'Marvel Hero Demo',
      description: 'Demo Web App With React/Api Marvel',
      url: 'https://marvel-hero-react.netlify.app/',
    },
    {
      image: './assets/images/generator_colors-1.jpg',
      title: 'Genrator Colors Demo',
      description: 'Mini Demo with Javascript',
      url: 'https://generator-color.web.app/',
    },
  ];
  ngOnInit(): void {}
}
