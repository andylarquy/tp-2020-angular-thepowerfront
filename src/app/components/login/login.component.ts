import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
//import { ServiceSuperIndividuos } from 'src/app/services/serviceIndividuos/serviceIndividuos';
//import { SingletonUsuario } from 'src/app/singletonUsuario/singletonUsuario'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    'section { margin: 1.2em; }'
  ]
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, 
    //public individuoService: ServiceSuperIndividuos, 
    //private SingletonUsuario: SingletonUsuario
    ) { }

  username: string
  password: string
  errorMessage: string
  title = 'Login'
  prueba: 3

  ngOnInit() {
  }

  async usuarioLogueadoConEstasCredenciales() {
   // return await this.individuoService.obtenerUsuarioConEstasCredenciales(this.username, this.password)
  }

  async irARelaciones() {

    // Limpio el cartel de error
    this.errorMessage = ''

    try {
      this.validarCredencialesNoVacias()
      /*
      Esto va a asumir que la informacion del back retornó correctamente y la va asignar al usuario logueado.
      Si hubiese un error al traer la informacion del back, 'await this.usuarioLogueadoConEstasCredenciales()'
      devuleve un error, como estamos adentro de un try se interrumpe la ejecucion y no permite el logueo
      */

    //  this.SingletonUsuario.setUsuarioLogueado(await this.usuarioLogueadoConEstasCredenciales())
      this.router.navigate(['/aplicacion/dashboard/panelRelaciones']);

    } catch (error) {
      console.log(error)
      if (error.status == 403) {
        this.errorMessage = 'Credenciales invalidas'
      } else if (error instanceof Error) {
        this.errorMessage = error.message
      } else if (error.status == 0) {
        this.errorMessage = this.errorMessage = 'Error al intentar comunicarse con el servidor, compruebe que está corriendo';
      }
    }
  }
  validarCredencialesNoVacias() {

    if (!this.username) {
      throw new Error('Ingrese un username')
    }

    if (!this.password) {
      throw new Error('Ingrese una contraseña')
    }

  }
}



