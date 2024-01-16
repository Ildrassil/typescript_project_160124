export type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grades
}
export type Grades = {
    english?: (string| number| undefined)[],
    math?: (string| number| undefined)[],
    biology?: (string| number| undefined)[],
    chemistry?: (string| number| undefined)[],
    physics?: (string| number| undefined)[],
    sport?: (string| number| undefined)[]
}
