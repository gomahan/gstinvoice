import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity()
export class Ourgstinfo
{
	@PrimaryColumn()
	id: number;

	@Column()
	cgstpercentage: string;

    @Column()
	sgstpercentage: string;

    @Column()
	igstpercentage: string;
    
}


