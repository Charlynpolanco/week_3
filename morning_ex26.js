class Hamster {
    constructor(name, owner, price){
    this.owner = owner;
    this.name = name;
    this.price = price;
}
    wheelRun(){
    console.log("squeak squeak")
}
    eatFood(){
    console.log("nibble nibble")
}
    getPrice(){
    return this.price;
}
}