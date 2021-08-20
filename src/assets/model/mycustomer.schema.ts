import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Mycustomer {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  city: string;

  @Column()
  pincode: string;

  @Column()
  phoneNumber: string;

  @Column()
  gstin: string;

}
