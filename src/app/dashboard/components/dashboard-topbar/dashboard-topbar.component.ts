import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-topbar',
  templateUrl: './dashboard-topbar.component.html',
  styleUrls: ['./dashboard-topbar.component.scss']
})
export class DashboardTopbarComponent implements OnInit {
  showForget = false;
  public listItems: Array<string> = [
    "New",
    "Re-Production",
    "Delete"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
