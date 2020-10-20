import { PartialType } from '@nestjs/mapped-types/dist/partial-type.helper';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
