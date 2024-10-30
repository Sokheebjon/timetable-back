import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { DatabaseModule } from '../database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

const uploadDir = path.join(__dirname, '..', '..', '..', 'uploads');

@Module({
  imports: [
    MulterModule.register({ dest: uploadDir }), // Configure file storage location
    ServeStaticModule.forRoot({
      rootPath: uploadDir,
      serveRoot: '/uploads',
    }), // Serve files from the storage location
    DatabaseModule,
  ],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService], // Make FileService available to other modules
})
export class FileModule {}
