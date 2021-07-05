import employee from './employee.js'

class tester extends employee {
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

const tester1 = new tester('Xinyue', 'This task, that task');
tester1.displayInfo();

export default tester;