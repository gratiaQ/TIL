import { CatsRepository } from './cats.repository';
import { CatRequestDto } from './dto/cats.request.dto';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
}
