import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8090';
  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/api/student', studentData);
  }
  public getStudent() {
    return this.http.get(this.API + '/api/student');
  }
  public deleteStudent(id: any) {
    return this.http.delete(this.API + '/api/student/' + id);
  }
  
  public updateStudents(student: any) {
    return this.http.put(this.API + '/api/student/', student);
  }
}
