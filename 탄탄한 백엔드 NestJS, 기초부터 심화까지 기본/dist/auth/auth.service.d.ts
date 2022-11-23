import { LoginRequestDto } from './dto/login.request.dto';
import { CatsRepository } from './../cats/cats.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly catsRepository;
    private jwtService;
    constructor(catsRepository: CatsRepository, jwtService: JwtService);
    jwtLogIn(data: LoginRequestDto): Promise<{
        token: string;
    }>;
}
