import { Document, model, Schema } from "mongoose";

export interface CamperInt {
  [x: string]: any;
  discordId: string;
  round: number;
  day: number;
  timestamp: number;
}

export const Camper = new Schema({
  discordId: String,
  round: Number,
  day: Number,
  timestamp: Number,
});

export default model<CamperInt>("camper", Camper);
