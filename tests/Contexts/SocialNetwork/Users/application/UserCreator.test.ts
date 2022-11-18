import { User } from '../../../../../src/Contexts/SocialNetwork/Users/domain/User';
import { UserRepository } from '../../../../../src/Contexts/SocialNetwork/Users/domain/UserRepository';
import { UserCreator } from '../../../../../src/Contexts/SocialNetwork/Users/application/UserCreator';

describe('UserCreator', () => {
  it('should create a valid user', async () => {
    const repository: UserRepository = {
      save: jest.fn()
    };
    const creator = new UserCreator(repository);
    const id = 'id';
    const name = 'name';    
    const email = 'test@test.com';
    const expectedUser = new User(id, name, email);

    await creator.run(id, name, email);

    expect(repository.save).toHaveBeenCalledWith(expectedUser);
  });
});
