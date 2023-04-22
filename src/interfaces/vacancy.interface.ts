import { ObjectId } from 'mongoose';

export interface IVacancy {
  _id: ObjectId | string;
  title: string;
  company: string;
  salary: number;
  location: string;
  contract: string;
  description: string;
  skills: string[];
  candidates: string[];
  url: string;
  createdAt: Date;
  updatedAt: Date;
}