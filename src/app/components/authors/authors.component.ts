import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Author } from '../../models/author.model';
import { AccueilComponent } from '../accueil/accueil.component';
import { AuthorSService } from '../../services/author-s.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [RouterLink, AccueilComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  listeAuteurs: Author[] = [];

  constructor(private authorService: AuthorSService) {}

  ngOnInit(): void {
    // Récupération des données des auteurs à partir du service
    this.authorService.getAllAuthors().subscribe((reponseAuteur) => {
      this.listeAuteurs = reponseAuteur;
    });

    this.authorService.getAllAuthors().subscribe((reponseBook) => {
      this.listeAuteurs = reponseBook;
    });
  }
}
