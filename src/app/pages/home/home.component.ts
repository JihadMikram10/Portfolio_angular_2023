import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const typed = new Typed('.jumbtron-text', {
      strings: ['Hi I am Web Developer!', 'Hi I am Web Developer!'],
      typeSpeed: 80,
      loop: true,
    });
    const sr = ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 400,
    });
    const lr = ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 600,
      origin: 'top',
    });
    lr.reveal('.about_me');
    sr.reveal('.image-profile');
  }
}
