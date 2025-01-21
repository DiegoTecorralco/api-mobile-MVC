// Este archivo es para que sea un filtro (Schema) para que no entre ningun elemento que no cumpla este esquema

import { model, Schema, version } from 'mongoose'; // importa el modelo y el esquema de mongoose

const teachersSchema= new Schema({     
    teacher_number:{
        unique: true,
        require: true,
        type: Number
    },
    name: String,
    lastname: String,
    age: Number,
    career: String,
    salary: Number
    },{
    versionKey:false,   //es para que no versione los documentos
    timestamps: true    //
});

export default model('teacher', teachersSchema); 
