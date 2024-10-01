function handle(cb) {
  cb();
}

class Cat {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
  meow() {
    console.log(`${this.name} meow: meo meo meo`);
  }
  run() {
    handle(() => {
      this.meow();
    });
  }
}

let alex = new Cat("Alex", "Yellow", "Bengal");
alex.run();
