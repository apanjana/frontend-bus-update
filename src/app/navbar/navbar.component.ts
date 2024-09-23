import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // implements OnInit 

  // ngOnInit() {
  //   this.checkScroll(); // Run on initialization in case the page is already scrolled
  // }

  // // HostListener to detect scroll events
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.checkScroll();
  // }

  // // Method to check scroll and adjust navbar style
  // checkScroll() {
  //   const navbar = document.getElementById('navbar');
  //   if (navbar) {
  //     if (window.scrollY > 50) {
  //       navbar.classList.add('scrolled');
  //     } else {
  //       navbar.classList.remove('scrolled');
  //     }
  //   }
  // }
}
