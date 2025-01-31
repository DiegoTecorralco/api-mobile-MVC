import { model, Schema, version } from 'mongoose'; // importa el modelo y el esquema de mongoose

const studentsSchema= new Schema({
    student_id:{
        unique:true,
        required: true,
        type: Number
    },
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    grade: {type: Number, required: true},
    group: {type: String, required: true},
    average: {type: Number, required: true}
    },{
    versionKey:false,
    timestamps: true
});

export default model('student', studentsSchema);
