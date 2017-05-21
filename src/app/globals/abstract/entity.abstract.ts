export abstract class AbstractEntity {
    protected id: string;

	public get Id(): string {
		return this.id;
	}

	public set Id(value: string) {
		this.id = value;
	}   	
}
