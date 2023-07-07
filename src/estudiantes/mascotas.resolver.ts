import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { MascotasService } from './mascotas.service';
import { Mascota } from './entities/mascota.entity';
import { UpdateMascotaInput, CreateMascotaInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Mascota)
export class MascotasResolver {
  constructor(private readonly mascotasService: MascotasService) {}

  @Mutation(() => Mascota)
  async createMascota(@Args('createMascotaInput') createMascotaInput: CreateMascotaInput)
  :Promise<Mascota> {
    return this.mascotasService.create(createMascotaInput);
  }

  @Query(() => [Mascota], { name: 'mascotas' })
  async findAll():Promise<Mascota[]> {
    return this.mascotasService.findAll();
  }

  @Query(() => Mascota, { name: 'mascotas' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Mascota> {
    return this.mascotasService.findOne(id);
  }

  @Mutation(() => Mascota)
  updateMascota(@Args('updateMascotaInput') updateMascotaInput: UpdateMascotaInput): Promise<Mascota> {
    return this.mascotasService.update(updateMascotaInput.id, updateMascotaInput);
  }

  @Mutation(() => Mascota)
  removeMascota(@Args('id', { type: () => ID }) id: string): Promise<Mascota> {
    return this.mascotasService.remove(id);
  }
}
