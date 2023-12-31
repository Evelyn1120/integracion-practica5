import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'mascotas'})
@ObjectType()
export class Mascota {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>String)
    dueno:string;


    @Column(()=>Boolean )
    @Field()
    estado:boolean;



}
