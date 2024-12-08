function greet(person: string, date: Date): string {
  console.log(person, date); // This line is the bug
  return `Hello, ${person}, today is ${date.toDateString()}.`;
}