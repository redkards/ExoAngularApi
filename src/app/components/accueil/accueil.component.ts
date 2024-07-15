import { Component } from '@angular/core';
import { AuthorsComponent } from '../authors/authors.component';
import { Author } from '../../models/author.model';
import { AuthorSService } from '../../services/author-s.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [AuthorsComponent, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  listeAuteurs: Author[] = [];

  constructor(private authorService: AuthorSService) {}

  ngOnInit(): void {
    console.log(this.listeAuteurs);
    this.authorService.getAllAuthors().subscribe((reponseAuteur) => {
      this.listeAuteurs = reponseAuteur;
    });

    this.authorService.getAllAuthors().subscribe((reponseBook) => {
      this.listeAuteurs = reponseBook;
      console.log(this.listeAuteurs);
    });
  }
}
