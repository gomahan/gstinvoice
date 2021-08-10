import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity()
export class Myproduct
{
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

    @Column()
	rateperscale: string;

}


