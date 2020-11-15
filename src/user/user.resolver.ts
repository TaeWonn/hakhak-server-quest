import { Resolver , Query , Mutation , Args } from '@nestjs/graphql';
import { UserInputType } from './user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {

    constructor(private readonly userService: UserService) {}

    @Query(returns => User)
    async getAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Mutation(returns => User)
    async createUser(@Args({name: 'name', type:()=> String}) user: UserInputType){
        return this.userService.createUser({name: name});
    }
}
