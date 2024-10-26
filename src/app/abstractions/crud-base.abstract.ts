export abstract class CrudBase<T> {
  abstract create(element: T): boolean
  abstract read(): Array<T>
  abstract update(index: number, element: T): void
  abstract remove(element: number): boolean
}