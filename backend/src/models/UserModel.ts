import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({ 
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    HealthandHygine:{
        type: Array
    },
    CommunicationSkills:{
        type: Array
    },
    PresentationSkills:{
        type: Array
    },
    TechnicalSkills:{
        type: Array
    },
    PhysicalAppearance:{
        type: Array
    },
})

export default mongoose.model("users",  userSchema)