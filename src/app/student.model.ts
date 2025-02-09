export class Student{
    id:number;
    name:string;
    yearBook:number;
    active:boolean;
    marks?:{subject:string,grade:number}[];

    constructor(name: string,yearbook:number) {
        this.id = 0;
        this.name = name;
        this.yearBook = yearbook;
        this.active = true;
    }
}