import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
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
  }
}
