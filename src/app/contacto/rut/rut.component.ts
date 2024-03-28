import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'rut-input',
  templateUrl: './rut.component.html',
  styleUrls: ['./rut.component.css']
})
export class RutComponent implements OnChanges{

  @Input() TipoRut: string = 'Rut'
  formularioDocumento: FormGroup  

  variableNueva : string = 'Rut'

  constructor( private form: FormBuilder ) {
    this.formularioDocumento = this.form.group({      
      rut: [''],      
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.variableNueva = changes?.['TipoRut'].currentValue;
  }
//ojo: !changes significa si no...

  hasError (controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched
  }

}
