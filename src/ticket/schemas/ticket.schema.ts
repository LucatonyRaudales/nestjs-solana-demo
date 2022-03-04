import { Schema } from 'mongoose';

export const ticketSchema = new Schema({
  ticketID: { type: String, required: true },
  hash: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
