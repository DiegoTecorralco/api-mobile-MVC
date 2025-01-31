import { model, Schema, version } from 'mongoose'; // importa el modelo y el esquema de mongoose

const classroomsSchema= new Schema({
    classroom_id:{
        unique:true,
        required: true,
        type: Number
    },
    building: String,
    career: String,
    type: String,
    capacity: Number
    },{
    versionKey:false,
    timestamps: true
});

export default model('classroom', classroomsSchema);
