// Cuando un usuario se loguea la informacion de la sesion (Que superindividuo se logueo)
// Se va a almacenar en este objeto, private usuarioService: Usua, private usuarioService: UsuarioServicerioService
import { Injectable } from '@angular/core';
import { SuperIndividuo } from 'src/app/domain/superindividuo/superindividuo.domain';
import { Equipo } from '../domain/equipo/equipo.domain';


@Injectable({
    providedIn: 'root'
})
export class SingletonUsuario {

    constructor() { }

    usuarioLogueado: SuperIndividuo;

    setUsuarioLogueado(individuo) {
        this.usuarioLogueado = individuo;
    }

    hayUnUsuarioLogueado() {
        return !!this.usuarioLogueado ;
    }

    get getUsuarioLogueado() {
        return this.usuarioLogueado;
    }

    desloguearUsuario(){
        this.setUsuarioLogueado(null)
    }

    esOwnerDe(equipo: Equipo){
        return this.usuarioLogueado.id === equipo.owner.id
    }

}
