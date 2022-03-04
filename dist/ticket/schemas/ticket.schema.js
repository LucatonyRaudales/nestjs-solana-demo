"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ticketSchema = new mongoose_1.Schema({
    ticketID: { type: String, required: true },
    hash: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
//# sourceMappingURL=ticket.schema.js.map