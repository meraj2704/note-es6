class Instructor{
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(nam,loca)
    {
        this.name = nam;
        this.location = loca;
    }
    startSupportSession(time)
    {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module)
    {
        console.log(`please create quiz for module ${module}`)
    }
}
const amir = new Instructor('amir', 'saudi');
console.log(amir);
amir.startSupportSession('8:30');
const sharif = new Instructor('Tanvir Hossain Sharif', 'Baharain');
console.log(sharif);
sharif.createQuiz(10);