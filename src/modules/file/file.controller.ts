import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('File api collection')
@Controller('upload')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload a file',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Set destination folder
        filename: (req, file, callback) => {
          // Generate a unique filename with extension
          const fileExtName = extname(file.originalname); // Get file extension
          const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${fileExtName}`;
          callback(null, fileName);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Delegate file handling to the FileService
    return await this.fileService.uploadFile(file);
  }

  @Get(':id')
  async getFileById(@Param('id') id: string) {
    // Delegate file retrieval to the FileService
    return await this.fileService.getFileById(id);
  }
}
