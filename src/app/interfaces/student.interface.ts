import { CrudBase } from "../abstractions/crud-base.abstract";
import { Student } from "../entities/student.entitie";

export interface StudentCrud extends CrudBase<Student> { }
