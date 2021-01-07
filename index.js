function wakeDog(dogName, dogBreed) {
    let instruction = `Wake ${dogName} the ${dogBreed}`;
    console.log(instruction);
    return instruction;
}

function leashDog (dogName, dogBreed) {
    let instruction = `Leash ${dogName} the ${dogBreed}`;
    console.log(instruction);
    return instruction;
}

function walkToPark (dogName, dogBreed) {
    let instruction = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(instruction);
    return instruction;
}

function throwFrisbee (dogName, dogBreed) {
    let instruction = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(instruction);
    return instruction;
}

function walkHome (dogName, dogBreed) {
    let instruction = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(instruction);
    return instruction;
}

function unleashDog (dogName, dogBreed) {
    let instruction = `Unleash ${dogName} the ${dogBreed}`;
    console.log(instruction);
    return instruction;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let array = []
    let i = 0;
    while (i < routine.length) {
    array.push(routine[i](dogName, dogBreed));
    i++;
    }
    return array
}


