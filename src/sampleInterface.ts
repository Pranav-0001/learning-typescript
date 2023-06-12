interface User {
    username: string;
    age: number;
}

function getUser<T extends User>(username: T["username"], age: T["age"]) {
    console.log(username, age);
}

const user1: User = {
    username: "Pranav",
    age: 22
};

getUser(user1.username, user1.age);
