import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentApi';
  studentDetails: any;

  studentToUpdate={
      id:"",
      name:"",
      age:"",
      mobile:"",
      gender:""
  };
  
  constructor(private studentService: StudentService) {
    this.getStudentDetails();
  }


  register(registerForm: { value: any; }) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getStudentDetails() {
    this.studentService.getStudent().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
        console.log(typeof this.studentDetails.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteStudent(student: { id: any; }){
    this.studentService.deleteStudent(student.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails()
        alert("Do you want to delete this record?")
      },
      (err) => {
        console.log(err);
      }

    );
  }
  update(student: any){
    this.studentToUpdate=student;
  }

  updateStudent(){
    console.log(this.studentToUpdate);
    this.studentService.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
