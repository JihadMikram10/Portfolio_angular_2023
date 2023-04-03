import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const sr = ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 600,
      origin: 'bottom',
    });
    sr.reveal('.skills');
  }
}
