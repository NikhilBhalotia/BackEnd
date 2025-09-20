import mongoose from "mongoose";

const numberOfHoursSchema = new mongoose.Schema({
  workingHours: {
    type: Number,
    required: true,
  }
})

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
    
  },
  experienceInYears: {
    type: Number,
    default: 0,
    
  },
  qualification: {
    type: String,
    required: true,
    
  },
  workInHospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Hospital",
    }
  ],
  numberOfHours: [numberOfHoursSchema]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)