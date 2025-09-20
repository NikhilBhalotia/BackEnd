import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
  pastDiagnose: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Patient"
  },
  healthIssuse: [
    {
      type: String,
      required: true,
    }
  ]
},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)