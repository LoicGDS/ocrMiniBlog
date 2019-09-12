import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle : string;		// Titre du Post
  @Input() postContent: string;		// Contenu du Post
  @Input() postLoveIts: number;		// Nombre de LoveIts
  @Input() postCreatedAt: Date;		// Date de creation du Post

  constructor() { }

  ngOnInit() {
  }

	// Ajoute valPLI au nombre de postLovesIts
  chgPostLoveIts(valPLI) {
    this.postLoveIts += valPLI;
    console.log(this.postLoveIts); 	// Pour controle
  }

}
