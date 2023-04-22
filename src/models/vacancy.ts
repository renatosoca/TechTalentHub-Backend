import { model, Model, models, Schema } from 'mongoose';
import { IVacancy } from '../interfaces';

export const vacancySchema = new Schema<IVacancy>({
  title: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  salary: { type: Number, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  contract: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  skills: { type: [String], required: true, trim: true },
  candidates: [
    {
      name: String,
      email: String,
      cv: String,
    }
  ],
  url: { type: String, required: true, trim: true, lowercase: true },
}, { timestamps: true });

const vacancyModel: Model<IVacancy> = models.Vacancy || model<IVacancy>('Vacancy', vacancySchema);
export default vacancyModel;