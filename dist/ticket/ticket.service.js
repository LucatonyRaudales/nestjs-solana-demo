"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async getTickets() {
        const tickets = await this.ticketModel.find();
        return tickets;
    }
    async getTicket(ticketID) {
        const ticket = await this.ticketModel.findOne({ ticketID });
        return ticket;
    }
    async insertTicket(createTicketDTO) {
        const ticket = new this.ticketModel(createTicketDTO);
        return await ticket.save();
    }
    async deleteTicket(ticketID) {
        const ticketDeleted = await this.ticketModel.findByIdAndDelete(ticketID);
        return ticketDeleted;
    }
    async updateTicket(ticketID, createTicketDTO) {
        const ticketUpdated = await this.ticketModel.findByIdAndUpdate(ticketID, createTicketDTO, { new: true });
        return ticketUpdated;
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Ticket')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map