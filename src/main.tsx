import {Student} from "./model.tsx";


const student1: Student = {
    firstName: "Peter",
    lastName: "Zwegert",
    age: 17,
    grades:[3,4,1,3,6,2]
}


const student2 :Student = {

    firstName: "Georg",
    lastName: "John",
    age: 16,
    grades:[2,"A",1,undefined,"F",undefined,3,"B",5,undefined,"D",4]


}
const student3 :Student = {

    firstName: "Jan",
    lastName: "Böhmermann",
    age: 12,
    grades:[2,"A",1,undefined,"F",undefined,3,"B",5,undefined,"D",4]


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
    console.log("=".repeat(30));
    for (let i = 0; i < value.grades.length; i++) {
        if (value.grades[i]=== undefined){
            value.grades[i]= "*";
        }

    }
    const arrayString: string = value.grades.join(",");


        console.log("Grades:" + arrayString);
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

