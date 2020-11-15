import { InputType, OmitType } from '@nestjs/graphql';
import { Board } from './board.model';

@InputType({ isAbstract : true})
export class createBoardInput extends OmitType(
    Board,
    ['id'] as const,
    InputType
){

}