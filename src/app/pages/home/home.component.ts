import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Pokemon, Result } from './interfaces/pokemons-list.interface';
import { PokemonDialogComponent } from './components/pokemon-dialog/pokemon-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private pokeService: PokeApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  public pokeList: Pokemon[] = [];
  public page: number = 0;
  public search: string = '';

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokeService
      .getAllPokemons()
      .pipe(
        tap((result) => {
          this.pokeList = result;
        })
      )
      .subscribe();
  }

  nextPage() {
    this.page += 20;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 20;
    }
  }

  onSearch(search: string) {
    this.page = 0;
    this.search = search;
  }

  openPokemonDialog(name: string) {
    const dialogRef = this.dialog.open(PokemonDialogComponent, {
      data: name,
      position: { top: '60px' },
    });
  }
}
