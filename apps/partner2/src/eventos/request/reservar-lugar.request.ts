import { TicketKind } from '@prisma/client';

export class ReservarLugarRequest {
  lugares: string[]; // ['A1', 'A2']
  tipo_ingresso: TicketKind;
  email: string;
}
