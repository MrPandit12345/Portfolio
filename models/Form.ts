import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFormSubmission extends Document {
  name: string;
  email: string;
  message?: string;
  createdAt: Date;
}

const FormSubmissionSchema: Schema<IFormSubmission> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const FormSubmission: Model<IFormSubmission> =
  mongoose.models.FormSubmission ||
  mongoose.model<IFormSubmission>("FormSubmission", FormSubmissionSchema);

export default FormSubmission;
