import { Student } from './../entities/student.entitie';
import { StudentCrud } from  './../interfaces/student.interface';

export class Students implements StudentCrud {
    private students: Array<Student> = [];

    create(student: Student): boolean {
        return this.students.push(student) > 0;
    }

    read(): Student[] {
        return this.students
    }

    update(index: number, student: Student): void {
        this.students.splice(index, 1, student);
    }

    remove(index: number): boolean {
        this.students.splice(index, 1);
        return true;
    }
}
