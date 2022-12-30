import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
];

@NgModule({
  imports: [CommonModule, material],
  exports: [material],
  declarations: [],
})
export class MatModule {}
