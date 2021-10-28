import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-shared',
  templateUrl: './button-shared.component.html',
  styleUrls: ['./button-shared.component.css']
})
export class ButtonSharedComponent implements OnInit {

  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

  buttonClicked(txt) {
    alert(txt);
  }
}
