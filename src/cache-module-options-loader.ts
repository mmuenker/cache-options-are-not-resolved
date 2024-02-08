import {
  CacheModuleOptions,
  CacheOptionsFactory,
} from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';

@Injectable()
export class CacheModuleOptionsLoader implements CacheOptionsFactory {

  @Inject(Logger)
  private readonly logger!: Logger;

  constructor() {
    this.logger.log('constructor', 'CacheModuleOptionsLoader');
  }

  createCacheOptions(): CacheModuleOptions {
    this.logger.log('create cache options', 'CacheModuleOptionsLoader');
    return {
      ttl: 60 * 60 * 24,
      max: Number.MAX_SAFE_INTEGER,
    };
  }

}
