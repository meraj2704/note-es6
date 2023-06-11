const number = [1,2,3,4];
let salary = 4000;
salary =2 ;

// default function parameters 
function calculatesalary (slary, tax = 0.25, bonus=0)
{
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string 
const elementHtml = `
<div>
  <h3> Name </h3>
  <p>ADdress: </p>
  <p> Salaryy : ${calculatesalary(100,0,0)}</p>
  <p> others : ${number[2]} </p>
</div> 
`

// 4. error function 
const doubleIt = x => x*2;
const calculatesalary2 = (salary, tax, bonus)  => salary *tax *salary + bonus;

// spread 
const ages = [11,13,15];
const newAges = [...ages,23,345,34];

//6 destructuring 
const {x,y,z,...c} = {x:45, y:12 , z:33, name:'shakib', salary:200000};