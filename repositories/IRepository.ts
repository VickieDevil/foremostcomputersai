export interface IRepository<T> {

  findAll(): Promise<T[]>;

  findById(
    id: string
  ): Promise<T | null>;

  create(
    data: Partial<T>
  ): Promise<boolean>;

  update(
    id: string,
    data: Partial<T>
  ): Promise<boolean>;

  delete(
    id: string
  ): Promise<boolean>;

}