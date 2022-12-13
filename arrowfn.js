class Student
{
static count = 0; 
static countObjects()
{
console.log(`${Student.count} objects created`);
  
}

constructor(name, age, ph, bmarks)
{
Student.count++;
this.name = name;
this.age=age;
this.ph = ph;
this.bmarks = bmarks; 
}

eligibility(elScore)
{
return (elAge) => {

if( this.bmarks>=40 && this.age>=elAge) 
console.log(`${this.name} is eligible for placements`)
else
console.log(`${this.name} is NOT eligible for placements`)}
}
}



let karthik = new Student("Karthik", 20, 8888888888, 30);



let Vignesh = new Student("Vignesh", 22, 8888888888, 43);



let Ravi = new Student("Ravi", 23, 8888888888, 60);



let Anand = new Student("Anand", 42, 8888888888, 60);



let Vijay = new Student("Vijay", 25, 8888888888, 20);

console.log(karthik.eligibility(40)(20))
console.log(Vignesh.eligibility(40)(20))
console.log(Ravi.eligibility(40)(20))
console.log(Anand.eligibility(40)(20))
console.log(Vijay.eligibility(40)(20))
