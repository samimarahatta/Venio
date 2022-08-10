import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-upload',
  templateUrl: './new-upload.component.html',
  styleUrls: ['./new-upload.component.scss']
})
export class NewUploadComponent implements OnInit {
  

  public steps = [
    { label: "Select", isValid :true },
    { label: "Source", isValid :true },
    { label: "Upload", isValid :true},
    { label: "Process", isValid :true},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
