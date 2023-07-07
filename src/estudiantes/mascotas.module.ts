import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasResolver } from './mascotas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';

@Module({
  providers: [MascotasResolver, MascotasService],
  imports:[
    TypeOrmModule.forFeature([Mascota])
  ]
})
export class MascotasModule {}
