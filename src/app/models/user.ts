

export class User {
    //public _id: string no es neccesario
    constructor(
        public _id: string, // _id: string con ECMAscripte podemos pasar de esta manera la propiedad, sin tener que crearla previamente fuera del cosntructor
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ) {
        //this._id = _id
    }
}