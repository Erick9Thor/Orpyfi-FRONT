export class Song {
    constructor(
        public number: number, // _id: string con ECMAscripte podemos pasar de esta manera la propiedad, sin tener que crearla previamente fuera del cosntructor
        public name: string,
        public duration: string,
        public file: string,
        public album: string
    ) { }
}