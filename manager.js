import employee from './employee.js'

class manager extends employee {
  constructor(name, taskList, staffUnder) {
    super(name, taskList);
    this.staffUnder = staffUnder;
  }

  set setName(newName) {
    this.name = newName;
  }

  displayInfo() {
    console.log(this.name);
    console.log(this.taskList);
  }

  addEmployee(e) {
    this.staffUnder = e;
  }
}

const manager1 = new manager('Janes', 'Task3, Task5');
manager1.displayInfo();

export default manager;