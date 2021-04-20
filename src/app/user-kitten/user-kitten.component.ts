import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../common/Kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent implements OnInit {
  @Input() mesChats: Kitten[];

  constructor() {}

  ngOnInit(): void {}
}
