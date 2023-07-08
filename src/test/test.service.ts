import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  create(createTestDto: CreateTestDto) {
    return 'Create a new sayen';
  }

  findAll() {
    return `All sayans`;
  }

  findOne(id: number) {
    return `This is a sayen number #${id} `;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `Modify sayn number  #${id} `;
  }

  remove(id: number) {
    return `Remove sayn number  #${id} `;
  }
}
