import { Component, OnInit } from '@angular/core';
import { Kitten } from '../common/Kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  listeAdoption: Kitten[] = [];
  listeMesChats: Kitten[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listeAdoption.push(
      new Kitten('Harvey', 'Batard', new Date('04/15/2004'), 'url_img'),
      new Kitten('Chat', 'Batard', new Date('04/15/2009'), 'url_img'),
      new Kitten('Minet', 'Angora', new Date('04/15/2007'), 'url_img'),
      new Kitten('Machin', 'Batard', new Date('04/15/2001'), 'url_img'),
      new Kitten('truc', 'Egyptien', new Date('04/15/2005'), 'url_img')
    );
  }

  adopterChat(chat: Kitten) {
    // supprimer le chat de notre liste de chat à adopter
    const index = this.listeAdoption.findIndex((element) => {
      element.id === chat.id;
    });
    this.listeAdoption.splice(index, 1);
    // ajouter le chat à notre liste personnelle
    this.listeMesChats.push(chat);
  }
}
