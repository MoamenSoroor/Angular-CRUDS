import { IStudent } from "./IStudent"

export class Student implements IStudent {
  id: number;
  name: string;
  birthDate: Date;
  email: string;
  phone: string;
  track: string;
  /**
   *
   */
  constructor(obj: any) {
    if (!obj) obj = {};
    this.id = obj.id;
    this.name = obj.name;
    this.birthDate = obj.birthDate;
    this.email = obj.email;
    this.phone = obj.phone;
    this.track = obj.track;
  }

  Update(obj: any) {
    if (!obj) return;
    this.id = obj.id;
    this.name = obj.name
    this.birthDate = obj.birthDate;
    this.email = obj.email;
    this.phone = obj.phone;
    this.track = obj.track;
  }

  toAnyObject(): any {
    return {
      id: this.id,
      name: this.name,
      birthDate: this.birthDate,
      email: this.email,
      phone: this.phone,
      track: this.track,
    }
  }

}