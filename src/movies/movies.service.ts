import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
    return true;
  }

  create(newMovie: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...newMovie,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    this.movies = this.movies.map(movie => {
      if (movie.id === id) {
        return {
          ...movie,
          ...updateData,
        };
      }
      return movie;
    });
    return this.getOne(id);
  }
}
