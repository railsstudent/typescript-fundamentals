interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private stack: T[] = [];

  public push(items: T | T[]): IStack<T> {
    if (Array.isArray(items)) {
      items.forEach(item => this.stack.push(item));
    } else {
      this.stack.push(items);
    }
    return this;
  }

  public pop(): T | undefined {
    if (this.length() > 0) {
      return this.stack.pop();
    }
    return undefined;
  }

  public length(): number {
    return this.stack.length;
  }

  public print(): void {
    console.log(JSON.stringify(this.stack));
  }
}
