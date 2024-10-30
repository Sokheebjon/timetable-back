import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  constructor(private readonly databaseService: DatabaseService) {}

  async uploadFile(file: Express.Multer.File) {
    const uploadDir = path.join(__dirname, '..', '..', '..', 'uploads');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    return this.databaseService.file.create({
      data: {
        originalName: file.originalname,
        size: file.size,
        url: `http://localhost:3000/uploads/${file.filename}`,
        mimeType: file.mimetype,
        fileName: file.filename,
      },
    });
  }

  async getFileById(id: string) {
    return this.databaseService.file.findUnique({
      where: { id },
    });
  }
}
