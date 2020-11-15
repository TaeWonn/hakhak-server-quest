import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { type } from 'os';
import { User } from "./user.model";

@InputType()
export class UserInputType {

    @Field()
    name!: string;

    
}