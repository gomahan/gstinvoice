import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Myinvoice } from './myinvoice.schema';


@Entity()
export class Particular
{
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

    @Column()
	rateperscale: string;

    @Column()
	quantity: string;
	

	@ManyToMany(type => Myinvoice, myinvoice => myinvoice.particulars)
    inovices: Myinvoice[];

}


