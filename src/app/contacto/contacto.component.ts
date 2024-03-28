import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit,  OnDestroy {

  formularioContacto: FormGroup  
  TipoRut: string = 'Rut'
  mostrarRut: boolean = false

  constructor( private form: FormBuilder ) {
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      TipoRut: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {     
    this.formularioContacto.get('nombre')?.setValue('Juan')
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('TipoRut')?.valueChanges.subscribe(value => {
      this.mostrarRut = value != ''
      this.TipoRut = value
    })    
  }  

  ngOnDestroy():void{
    console.log('Se destruyo el componente')
  }

  hasError (controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto)
  }

}
