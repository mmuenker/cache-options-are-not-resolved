import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModuleOptionsLoader } from './cache-module-options-loader';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      useClass: CacheModuleOptionsLoader,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
