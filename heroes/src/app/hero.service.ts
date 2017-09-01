import { Injectable } from '@angular/core';

@Injectable() 
//applied the function as an injectable decorator
//tells typescript to emit metadata about the service
export class HeroService{
  getHeroes(): void{};//stub
}