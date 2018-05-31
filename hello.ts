function greeter(person: string) {
    return "Bonjour, " + person;
}

var user = "Test";

document.body.innerHTML = (greeter(user));