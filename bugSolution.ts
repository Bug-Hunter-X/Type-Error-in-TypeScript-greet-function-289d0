function greet(person: string, date: Date): string {
  console.log(person, date.toDateString()); //Corrected line
  return `Hello, ${person}, today is ${date.toDateString()}.`;
}