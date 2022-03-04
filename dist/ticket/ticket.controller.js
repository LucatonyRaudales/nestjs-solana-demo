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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_dto_1 = require("./dto/ticket.dto");
const ticket_service_1 = require("./ticket.service");
let TicketController = class TicketController {
    constructor(service) {
        this.service = service;
    }
    async createPost(res, createTicketDTO) {
        const ticket = await this.service.insertTicket(createTicketDTO);
        return res
            .status(common_1.HttpStatus.OK)
            .json({ message: 'Ticket inserted', data: ticket });
    }
    async getTickets(res) {
        const tickets = await this.service.getTickets();
        return res
            .status(common_1.HttpStatus.OK)
            .json({ message: 'Tickets list', data: tickets });
    }
    async getTicket(res, ticketID) {
        const ticket = await this.service.getTicket(ticketID);
        if (!ticket)
            throw new common_1.NotFoundException('Ticket does not exist ' + ticketID);
        return res.status(common_1.HttpStatus.OK).json({ message: 'Ticket', data: ticket });
    }
    async deleteTicket(res, ticketID) {
        const ticketDeleted = await this.service.deleteTicket(ticketID);
        if (!ticketDeleted)
            throw new common_1.NotFoundException('Ticket does not exist ' + ticketID);
        return res
            .status(common_1.HttpStatus.OK)
            .json({ message: 'ticket deleted', data: ticketDeleted });
    }
    async updateTicket(res, createTicketDTO, ticketID) {
        const ticketUpdated = await this.service.updateTicket(ticketID, createTicketDTO);
        if (!ticketUpdated)
            throw new common_1.NotFoundException('Ticket does not exist ' + ticketID);
        return res
            .status(common_1.HttpStatus.OK)
            .json({ message: 'ticket updated', data: ticketUpdated });
    }
};
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ticket_dto_1.CreateTicketDTO]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTickets", null);
__decorate([
    (0, common_1.Get)('/:ticketID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('ticketID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicket", null);
__decorate([
    (0, common_1.Delete)('/:ticketID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('ticketID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "deleteTicket", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('ticketID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ticket_dto_1.CreateTicketDTO, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateTicket", null);
TicketController = __decorate([
    (0, common_1.Controller)('ticket'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map