import BSON from 'bson';
import fs from 'fs';
import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';

export class FileUserRepository implements UserRepository {
  private FILE_PATH = `${__dirname}/courses`;

  async save(user: User): Promise<void> {
    fs.promises.writeFile(this.filePath(user.id), BSON.serialize(user));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
