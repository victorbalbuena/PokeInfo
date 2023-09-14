import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokeApiService } from '../../services/poke-api.service';
import { AllPokemonInfo } from '../../interfaces/pokemons-list.interface';

import { tap, delay } from 'rxjs';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.scss'],
})
export class PokemonDialogComponent implements OnInit {
  public pokemon?: AllPokemonInfo;

  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private pokeServce: PokeApiService
  ) {}

  ngOnInit(): void {
    this.pokeServce
      .getPokemonByName(this.data)
      .pipe(
        tap((data) => {
          console.log(data);
          this.pokemon = data;
        })
      )
      .subscribe();
  }

  getPokeInfo() {}

  onClose() {
    this.dialogRef.close(true);
  }
}
