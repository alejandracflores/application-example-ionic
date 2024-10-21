import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalizadoComponent } from '../components/personalizado/personalizado.component';

@NgModule({
  declarations: [PersonalizadoComponent],
  imports: [CommonModule],
  exports: [PersonalizadoComponent]
})
export class SharedModule {}
