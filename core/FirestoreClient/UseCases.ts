import type { IFirestoreClientRepository } from 'core/FirestoreClient/Repository';
import type { Model } from 'core/Model';

export class FirestoreClientUseCase<M extends Model> {
  constructor(
    protected repository: IFirestoreClientRepository<M>,
  ) {
    //
  }

  public get(id: string) {
    return this.repository.get(id);
  }

  public getAll() {
    return this.repository.getAll();
  }

  public create(data: Omit<M, '_uid' | '_created' | '_updated' | '_deleted'>) {
    return this.repository.create(data);
  }

  public update(data: Omit<Partial<M>, '_created' | '_updated' | '_deleted'> & Pick<M, '_uid'>) {
    return this.repository.update(data);
  }

  public delete(id: string) {
    return this.repository.delete(id);
  }

  public restoreDeleted(id: string) {
    return this.repository.restoreDeleted(id);
  }
}
