import { Component, OnInit } from '@angular/core';
import { Kitten } from '../common/Kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  chat: Kitten;

  constructor() {}

  ngOnInit(): void {
    this.chat = new Kitten('', '', new Date(), '');
  }

  soumission() {
    alert('test');
  }
}
