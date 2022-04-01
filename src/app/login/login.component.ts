import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Align } from '@progress/kendo-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

   anchorAlign: Align = { horizontal: "right", vertical: "top" };
   popupAlign: Align = { horizontal: "right", vertical: "bottom" };
   show = false;
   showForget = false;
   public enabled = true;
   public duration = 200;
   public type = "slide";
   public direction = "up";

   public get animate(): any {
    if (this.enabled) {
      return {
        type: this.type,
        direction: this.direction,
        duration: this.duration,
      };
    }

    return false;
  }

  // public get hasDirection(): boolean {
  //   return this.type === "slide" || this.type === "expand";
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
