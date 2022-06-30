import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {


  loginForm: FormGroup;
  respuestaLogin: any;
  isSubmitLogin: Boolean = false;

    //registro
  registroForm: FormGroup;
  respuestaRegistro: any;
  isSubmitReg: Boolean = false;


  constructor( private router: Router, public formBuilder:FormBuilder ) { 
      
    this.loginForm = this.formBuilder.group({
      emaillogin:['', [Validators.required]],
      inputPassword3:['', [Validators.required]]
    });

    this.registroForm = this.formBuilder.group({
      nombreregistro:['', [Validators.required,Validators.minLength(3),Validators.maxLength(100),Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú]*')]],
      telefonoregistro:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      emailregistro:['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      estadoregistro:['', [Validators.required,  Validators.pattern('[a-z A-Z ÁÉÍÓÚ áéíóú ]*')]],

    });

  }

  ngOnInit(): void {
  }

  loginusr(){
    
    this.isSubmitLogin= true;
    if(this.loginForm.valid){
      Swal.fire({
         //allowOutsideClick: false,
         title: 'Login correcto',
         icon: 'success',
         confirmButtonText: 'Aceptar'
       });
       

    }
  }

  registrousr(){
    this.isSubmitReg = true;
    if(this.registroForm.valid){
            Swal.fire({
         //allowOutsideClick: false,
         title: 'Registro correcto',
         icon: 'success',
         confirmButtonText: 'Aceptar'
       });
      
    }

  }

}
