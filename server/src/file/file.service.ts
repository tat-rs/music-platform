import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  AUDIO = 'audio',
  PICTURE = 'picture',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    try {
      // расширение файла
      const FileExtension = file.originalname.split('.').pop();
      // имя файла
      const fileName = uuid.v4() + '.' + FileExtension;
      //путь
      const filePath = path.resolve(__dirname, '..', 'static', type);
      //если папки еще нет, то создаем ее
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      // записываем файл на диск
      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
      return type + '/' + fileName;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /* removeFile() {} */
}
