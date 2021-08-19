import { modules } from './modules';

export class container {
  static resolve (name: string): any {
    return modules.find((module) => module.name === name)?.value;
  }
}

