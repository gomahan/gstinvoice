import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Mybusinessbank
{
	@PrimaryColumn()
	id: number;

    @Column()
	name: string;

    @Column()
	accountNumber: string;

    @Column()
	branch: string;

    @Column()
    ifscCode: string;

}