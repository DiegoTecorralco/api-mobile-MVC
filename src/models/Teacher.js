import { model, Schema, version } from 'mongoose'; // importa el modelo y el esquema de mongoose

const teachersSchema= new Schema({
    teacher_number:{
    require: true,
    type: Number
    },
    name: String,
    lastname: String,
    age: Number,
    career: String,
    salary: Number
    },{
    versionKey:false,
    timestamps: true
});

export default model('teacher', teachersSchema);
