import { AbstractEntity } from '../../../globals/abstract/entity.abstract';

export class BioEntity extends AbstractEntity{
    private body: string;
    private title: string;
    private createdDate: number;
    private updatedDate: number;
    private views: number;
    private version: string;
 
    public constructor(){
        super();
        
        this.body = '';
        this.title = '';
        this.createdDate = Date.now();
        this.updatedDate = Date.now();
        this.views = 0;
        this.version = 'v1.0.0';
    }

	public get Body(): string {
		return this.body;
	}

	public set Body(value: string) {
		this.body = value;
	}
    

	public get Title(): string {
		return this.title;
	}

	public set Title(value: string) {
		this.title = value;
	}

	public get CreatedDate(): number {
		return this.createdDate;
	}

	public set CreatedDate(value: number) {
		this.createdDate = value;
	}

	public get UpdatedDate(): number {
		return this.updatedDate;
	}

	public set UpdatedDate(value: number) {
		this.updatedDate = value;
	}

	public get Views(): number {
		return this.views;
	}

	public set Views(value: number) {
		this.views = value;
	}

    public get Version(): string {
		return this.version;
	}

	public set Version(value: string) {
		this.version = value;
	}
    
}