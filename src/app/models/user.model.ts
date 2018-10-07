
export class User {
  public identification: number;
  public name: string;
  public lastname: string;
  public birthdate: Date;

  constructor( identification: number, name: string, lastname: string,
    birthdate: Date) {
    this.identification = identification;
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthdate;
  }
}
