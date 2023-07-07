import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMascotaInput, UpdateMascotaInput } from './dto/inputs';
import { Mascota } from './entities/mascota.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MascotasService {

  constructor( 
    @InjectRepository(Mascota)
    private readonly mascotasRepository:Repository<Mascota> ){}

  async create(createMascotaInput: CreateMascotaInput): Promise<Mascota>  {
    const newMascota= this.mascotasRepository.create(createMascotaInput);
    return await this.mascotasRepository.save(newMascota); 
  }

  async findAll(): Promise<Mascota[]> {
    return this.mascotasRepository.find();
  }

  async findOne(id: string): Promise<Mascota> {
     const mascota= await  this.mascotasRepository.findOneBy({id});
     if (!mascota) throw new NotFoundException(`Not found`)
     return mascota;
  }

  async update(id: string, updateMascotaInput: UpdateMascotaInput): Promise<Mascota> {
    
    const mascota = await this.mascotasRepository.preload(updateMascotaInput);
    if (!mascota) throw new NotFoundException(`Not found`)
    return this.mascotasRepository.save(mascota);

  }

  async remove(id: string): Promise<Mascota> {

    const mascota= await  this.findOne(id);

    //await this.mascotasRepository.remove(mascota);
    await this.mascotasRepository.update({id:id}, {estado:false});

    return {...mascota, id};

  }
}
