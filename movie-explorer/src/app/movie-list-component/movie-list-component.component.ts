import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list-component.component.html',
  styleUrl: './movie-list-component.component.css'
})
export class MovieListComponentComponent {

  movies = ['Movie 1', 'Movie 2', 'Movie 3'];

  constructor()
  {

  }

  ngOnInit(): void {

  }

}
