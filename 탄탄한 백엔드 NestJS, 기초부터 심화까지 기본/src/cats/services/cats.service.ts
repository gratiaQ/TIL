import { ReadOnlyCatDto } from './../dto/cat.dto';
import { CatsRepository } from './../cats.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './../cats.schema';
import { CatRequestDto } from './../dto/cats.request.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class CatsService {
  //
  constructor(private readonly catsRepository: CatsRepository) {}
  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepository.existByEmail(email);
    if (isCatExist) {
      throw new UnauthorizedException('Already Cat Exist.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.catsRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return cat.readOnlyData;
  }

  async uploadImg(cat: Cat, files: Express.Multer.File[]) {
    const fileName = `cats/${files[0].filename}`;

    console.log(fileName);

    const newCat = await this.catsRepository.findByIdAndUpdateImg(
      cat.id,
      fileName,
    );
    console.log(newCat);
    return newCat;
  }

  async getAllCat() {
    const allCat = await this.catsRepository.findAll();
    return allCat;
  }
}
