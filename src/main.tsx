import {Student} from "./model.tsx";
//import {Grades} from "./model.tsx";

const student1: Student = {
    firstName: "Peter",
    lastName: "Zwegert",
    age: 17,
    grades:{
        english:["A",2,"B"],
        math:[1,undefined,"B"],
        biology:[undefined,2,"C"],
        sport:[1,"B", undefined]
    }
}


const student2 :Student = {

    firstName: "Georg",
    lastName: "John",
    age: 16,
    grades:{
        english:["A",2,"B"],
        math:[1,undefined,"B"],
        chemistry:[undefined,3,"C"]
    }


}
const student3 :Student = {

    firstName: "Jan",
    lastName: "Böhmermann",
    age: 12,
    grades:{
        physics:["A",2,"B"],
        english:[1,undefined,"B"],
        biology:[undefined,2,"C"],
        chemistry:[1,"B", undefined]
    }


}

let studentList: Student[]= [];

function addStudent(student: Student, studentList: Student[]){

    studentList.push(student)

    return studentList;
}
let newLength: number;
newLength = addStudent(student3,studentList);
newLength = addStudent(student1,studentList);
newLength = addStudent(student2,studentList);

console.log(studentList.forEach(student => outPutStudent(student)));




function outPutStudent(value:Student){
    console.log(value.firstName,value.lastName,"("+value.age+")");
    console.log("=".repeat(value.firstName.length + value.lastName.length+1));

    const gradesList =Object.entries(value.grades);
    let updatedGradeList: [string,(string | number| undefined)[]]=[];
    for (let i = 0; i < gradesList.length; i++) {
        updatedGradeList.push(gradesList[i][0]);
        updatedGradeList.push(gradesList[i][1].map(grade =>{
            if (grade === undefined){
                return "*";
            }
            else return grade;
        }));
    }

        console.log(updatedGradeList.flat(1).forEach(subject =>{
            if (subject.toString.length>1)
                console.log(subject +"/n");
        }));
}







/*type Todo = {
    id: number,
    description: string,
    number?: number| undefined,
    liste: number[],
    test: {
        names: string[]}
    myFunction: (value: string) => void,
    status: "OPEN" | "IN_PROGRESS" | "DONE"
}
const todoFunctuion = (value: string) =>{
    console.log(value);
}



const object: Todo = {
    id: 123,
    description: "Shopping",

    liste: [1,2,3,4],
    test: {
        names: ["a","b"]
    },
    myFunction: todoFunctuion,
    status: "OPEN"
};
const object2: Todo = {
    id: 123,
    description: "Shopping",

    liste: [1,2,3,4],
    test: {
        names: ["a","b"]
    },
    myFunction: todoFunctuion,
    status: "IN_PROGRESS"

};

console.log(object.id);
console.log(object.test);
console.log(object2.status)*/

