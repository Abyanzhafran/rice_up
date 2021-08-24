import { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';
import { User } from 'core/User/Model';

export type UserRepository = IFirestoreClientRepository<User>;
