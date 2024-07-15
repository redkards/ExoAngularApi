import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthorSService } from '../../services/author-s.service';
import { Router } from '@angular/router';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './author-create.component.html',
  styleUrl: './author-create.component.css',
})
export class AuthorCreateComponent {
  constructor(
    private formB: FormBuilder,
    private authorService: AuthorSService,
    private router: Router
  ) {}

  creationAuteur: FormGroup = this.formB.group({
    FirstName: ['', [Validators.required, Validators.minLength(3)]],
    LastName: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitted: boolean = false;

  addOneAuteur(): void {
    this.authorService.addAuthor(this.creationAuteur.value).subscribe();
    this.router.navigate(['/auteurs']);
    console.log(this.creationAuteur.value);
  }

  onSubmit(): void {
    console.log(this.creationAuteur.value);
    this.creationAuteur.reset();

    if (this.authorService.addAuthor(this.creationAuteur.value).subscribe()) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }
  }

  get form() {
    return this.creationAuteur.controls;
  } // getter to access form controls
}
