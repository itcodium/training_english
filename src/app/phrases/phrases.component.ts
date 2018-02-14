import { Component, OnInit } from '@angular/core';
import { EnglishService } from '../english.service';
import { Phrase } from './phrase';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.css']
})
export class PhrasesComponent implements OnInit {
  phrases: Phrase[];
  selectedPhrase: Phrase;
  constructor(private englishService: EnglishService) { }

  getPhrases(): void {
    this.englishService.getPhrases().subscribe(data => this.phrases = data);;

    console.log("this.phrases",this.phrases)
  }
  ngOnInit() {
    this.getPhrases()

  }
  onSelect(phrase: Phrase): void {
     this.selectedPhrase = phrase;
   }
}
