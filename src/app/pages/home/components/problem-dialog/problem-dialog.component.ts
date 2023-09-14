import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-problem-dialog',
  templateUrl: './problem-dialog.component.html',
  styleUrls: ['./problem-dialog.component.scss'],
})
export class ProblemDialogComponent {
  private readonly cadenaPatter = /^(\d+(,\d+)*)?$/;

  resultado: string[] = [];

  public cadena = new FormControl('', [
    Validators.required,
    Validators.pattern(this.cadenaPatter),
  ]);

  constructor(public dialogRef: MatDialogRef<ProblemDialogComponent>) {}

  handleCalc() {
    if (this.cadena.valid) {
      this.resultado = [];
      const cadena = this.cadena.value;

      // obtener solo los numeros, sin ,
      const numeros = cadena?.split(',').map(Number);

      //  crear objeto contador con key nummber
      const contador: { [key: number]: number } = {};

      for (const numero of numeros!) {
        contador[numero] = (contador[numero] || 0) + 1;
      }

      const resultado = Object.entries(contador).sort((a, b) => {
        const cantidadA = parseInt(a[0]);
        const cantidadB = parseInt(b[0]);

        return cantidadB - cantidadA;
      });

      for (const [numero, cantidad] of resultado) {
        this.resultado.push(numero + '-' + cantidad);
      }
    }
  }

  onClose() {
    this.dialogRef.close(true);
  }
}
