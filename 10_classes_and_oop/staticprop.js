class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

//When to Use static?
// When a function doesn’t need access to instance properties.

// For utility/helper methods (e.g., Math.max()).

// For maintaining a class-wide state (e.g., a counter).

// For defining constants related to a class.

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());