import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public toggleSide: Boolean = true;
  constructor() {}
  toggleToolbar() {
    this.toggleSide = !this.toggleSide;
  }

  ngOnInit(): void {}
}
