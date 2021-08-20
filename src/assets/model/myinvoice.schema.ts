import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Particular } from './particular.schema';



@Entity()
export class Myinvoice
{
	@PrimaryColumn()
	id: number;

    @Column()
    createdOn:string;

    @Column()
    cgst:string;

    @Column()
    sgst:string;

    @Column()
    igst:string;

    @Column()
	businessName: string;

    @Column()
	businessPhoneNumber: string;

    @Column()
	businessAddress: string;

    @Column()
	businessCity: string;

    @Column()
	businessPincode: string;

    @Column()
	businessGstin: string;

    @Column()
	businessCurrency: string;

    @Column()
	businessbankName: string;

    @Column()
	businessbankAccountNumber: string;

    @Column()
	businessbankBranch: string;

    @Column()
    businessbankIfscCode: string;
    

    @Column()
    customerName: string;
  
    @Column()
    customerAddress1: string;
  
    @Column()
    customerAddress2: string;
  
    @Column()
    customerCity: string;
  
    @Column()
    customerPincode: string;
  
    @Column()
    customerPhoneNumber: string;
  
    @Column()
    customerGstin: string;

    @ManyToMany(type => Particular, particular => particular.inovices,{
        eager: true,
    })
    @JoinTable()
    particulars: Particular[];

}


