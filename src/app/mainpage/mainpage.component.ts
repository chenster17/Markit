import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  @Input() mainpage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
