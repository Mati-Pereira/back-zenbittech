import { Injectable } from '@nestjs/common';
import { FormType } from '../@types/formType';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}
  async createForm(data: FormType): Promise<FormType> {
    return this.prisma.form.create({
      data,
    });
  }
}
