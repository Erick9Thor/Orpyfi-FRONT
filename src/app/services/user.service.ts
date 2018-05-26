import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from 'rxjs/Observable' //Recojer las respuestas de una peticion ajax al servidor
import { GLOBAL } from './global'

@Injectable() //Decorador, permite inyeccion de dependencia, para poder usar la classe en otro componente
export class UserService {
    public url: string; // url de la API rest
    constructor(private _http: Http){ //Para poder utilizar el servicio http se inyecta como para. y podemos usar todo el objeto 
        this.url = GLOBAL.url
    }

    public signup(){
        return 'Hola mundo desde el servicio'
    }
}