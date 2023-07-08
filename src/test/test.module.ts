import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestService],
  exports:[TestService]
})
export class TestModule {}
