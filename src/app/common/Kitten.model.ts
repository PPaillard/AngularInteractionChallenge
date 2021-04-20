export class Kitten {
  id: number;
  nom: string;
  race: string;
  dateNaissance: Date;
  image: string;

  constructor(
    nomChat: string,
    raceChat: string,
    dateNaissanceChat: Date,
    imageChat: string
  ) {
    this.id = Math.floor(Math.random() * (1000000 - 1)) + 1;
    this.nom = nomChat;
    this.race = raceChat;
    this.dateNaissance = dateNaissanceChat;
    this.image = imageChat;
  }
}
