// Task 9: Generic container

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item: number): void {
    this.items.push(item);
  },
  getItem(index: number): number | undefined {
    return this.items[index];
  }
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item: string): void {
    this.items.push(item);
  },
  getItem(index: number): string | undefined {
    return this.items[index];
  }
};

numberContainer.addItem(10);
numberContainer.addItem(20);
numberContainer.addItem(30);
console.log("Number at index 1:", numberContainer.getItem(1));

stringContainer.addItem("hello");
stringContainer.addItem("world");
stringContainer.addItem("typescript");
console.log("String at index 0:", stringContainer.getItem(0));

function getLastElement<T>(container: Container<T>): T | undefined {
  const lastIndex = container.items.length - 1;
  return lastIndex >= 0 ? container.items[lastIndex] : undefined;
}

console.log("Last number:", getLastElement(numberContainer));
console.log("Last string:", getLastElement(stringContainer));

export { Container, numberContainer, stringContainer, getLastElement };