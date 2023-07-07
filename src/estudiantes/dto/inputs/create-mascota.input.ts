import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateMascotaInput {



  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  dueno:string;

  
  @Field(()=>Boolean )
  @IsNotEmpty()
  estado:boolean;

}
