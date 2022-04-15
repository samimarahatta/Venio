import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  // items: any[] = [
  //   {
  //     text: "Item1",
  //   }
  // ]
 
  constructor(
    router: Router
) { }

  ngOnInit(): void {
  }

}
