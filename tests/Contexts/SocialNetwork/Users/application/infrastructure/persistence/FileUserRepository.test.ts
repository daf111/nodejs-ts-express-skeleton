import { User } from '../../../../../../../src/Contexts/SocialNetwork/Users/domain/User';
import { FileUserRepository } from '../../../../../../../src/Contexts/SocialNetwork/Users/infrastructure/persistence/FileUserRepository';

describe('Save User', () => {
  it('should have a user', async () => {
    const repository = new FileUserRepository();
    const user = new User('id', 'name', 'test@test.com');

    await repository.save(user);
  });
});
