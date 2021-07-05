import employee from './employee.js'

class developer extends employee {
  constructor(name, taskList) {
    super(name, taskList);
  }

  set setName(newName) {
    this.name = newName;
  }

  displayInfo() {
    console.log(this.name);
    console.log(this.taskList);
  }
}

const developer1 = new developer('Genie', 'Task1, Task2');
developer1.displayInfo();

export default developer;