class common{
    name;
    number;
    location;
    constructor(name,number,location)
    {
        this.name = name;
        this.number = number;
        this.location = location;
    }
}

class webDeveloper extends common{
    framework = 'react'
    constructor(name,number,location)
    {
        super(name,number,location);
    }
    work(time)
    {
        console.log(`i am workint at ${time}`);
    }
}
const zayed = new webDeveloper('zayed', '01684978243', 'dhaka');
console.log(zayed);
zayed.work('7:30');