import {
  CACHE_MANAGER,
  CacheInterceptor,
} from '@nestjs/cache-manager';
import {
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {

  @Inject(CACHE_MANAGER)
  private readonly cacheManager: any;

  @Get()
  getHello() {
    return { cacheOptions: this.cacheManager };
  }

}
