import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  btn!: any;
  nav!: any;
  constructor() {}

  ngOnInit(): void {
    this.btn = document.getElementById('menu-btn');
    this.nav = document.getElementById('menu');
    this.btn.addEventListener('click', () => {
      this.btn.classList.toggle('open');
      this.nav.classList.toggle('flex');
      this.nav.classList.toggle('hidden');
    });
  }
}
