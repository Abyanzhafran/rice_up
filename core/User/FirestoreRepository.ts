import { createFirestoreClientRepository } from 'core/FirestoreClient/createRepository';
import type { User } from 'core/User/Model';
import type { UserRepository } from 'core/User/Repository';

export const collectionName = 'USERS';

export class UserFirestoreClientRepository extends createFirestoreClientRepository<User>({
  collectionName,
}) implements UserRepository {
}
