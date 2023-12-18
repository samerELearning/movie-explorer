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

  movies = [
    {
      title: 'Thor: Love and Thunder',
      img: 'https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      description: 'After his retirement is interrupted by Gorr the God Butcher...'
    }
  ];

  constructor()
  {

  }

  ngOnInit(): void {

  }

}
