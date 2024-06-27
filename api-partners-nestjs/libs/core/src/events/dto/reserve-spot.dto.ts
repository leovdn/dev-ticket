import { TicketKind } from '@prisma/client';

export class ReserveSpotDto {
  spots: string[]; // ['A1', 'A2']
  ticketKind: TicketKind;
  email: string;
}
