import { Entity, Column, PrimaryColumn } from 'typeorm';



@Entity()
export class Mybusiness
{
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

    @Column()
	phoneNumber: string;

    @Column()
	address: string;

    @Column()
	city: string;

    @Column()
	pincode: string;

    @Column()
	gstin: string;

    @Column()
	currency: string;
    
}


