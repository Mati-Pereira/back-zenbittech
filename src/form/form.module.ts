import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FormController],
  providers: [FormService, PrismaService],
})
export class FormModule {}
