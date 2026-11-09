const multiplyValue = (value: number, multiplier?:number) : number=> {
   if(multiplier === undefined){
    return value * 2;
   }else {
    return value * multiplier;
   }
}



const processInput = (input: string | number | boolean) : string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (input === true) {
    return "Active";
  } else {
    return "Inactive";
  }
};





const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `Location: ${locationName} ( ${latitude} , ${longitude})`;
};




const concatenateArrays = <T>(...arrays: T[][]) :T[] =>{
   return arrays.flat();
}



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}


const getPopularCourses =(courses:Course[], minStudents:number) :Course[] =>{
   const filterCourses = courses.filter((course) => course.isPublished === true && course.students >= minStudents)
   return filterCourses;
}




const pluckValues = <T , K extends keyof T>(obj: T[], key : K):T[K][]=> {
    const result = obj.map((item)=> {
        return item[key];
    });
    return result;
}




class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}




const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
};
