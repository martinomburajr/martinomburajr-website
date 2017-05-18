export class GeolocationEntity {
    private coordinates: Coordinates;
    private timestamp: number;

    public hyperInit(geolocation: GeolocationEntity): GeolocationEntity {
        let coordinates = new Coordinates();
        if(!geolocation.Coordinates) {geolocation.Coordinates = coordinates.hyperInit(new Coordinates())}
        if(!geolocation.Timestamp) {geolocation.Timestamp = -19}
        return geolocation;
    }

	public get Coordinates(): Coordinates {
		return this.coordinates;
	}

	public set Coordinates(value: Coordinates) {
		this.coordinates = value;
	}

	public get Timestamp(): number {
		return this.timestamp;
	}

	public set Timestamp(value: number) {
		this.timestamp = value;
	} 
}

export class Coordinates {
    private accuracy: number;
    private altitude: number;
    private altitudeAccuracy: number;
    private heading: number;
    private latitude: number;
    private longitude: number;

    public hyperInit(coordinates: Coordinates): Coordinates {
        if(!coordinates.Accuracy) {coordinates.Accuracy = -19}
        if(!coordinates.Altitude) {coordinates.Altitude = -19}
        if(!coordinates.altitudeAccuracy) {coordinates.altitudeAccuracy = -19}
        if(!coordinates.Heading) {coordinates.Heading = -19}
        if(!coordinates.Latitude) {coordinates.Latitude = -19}
        if(!coordinates.Longitude) {coordinates.Longitude = -19}
        return coordinates;
    }

	public get Accuracy(): number {
		return this.accuracy;
	}

	public set Accuracy(value: number) {
		this.accuracy = value;
	}

	public get Altitude(): number {
		return this.altitude;
	}

	public set Altitude(value: number) {
		this.altitude = value;
	}

	public get AltitudeAccuracy(): number {
		return this.altitudeAccuracy;
	}

	public set AltitudeAccuracy(value: number) {
		this.altitudeAccuracy = value;
	}

	public get Heading(): number {
		return this.heading;
	}

	public set Heading(value: number) {
		this.heading = value;
	}

	public get Latitude(): number {
		return this.latitude;
	}

	public set Latitude(value: number) {
		this.latitude = value;
	}

	public get Longitude(): number {
		return this.longitude;
	}

	public set Longitude(value: number) {
		this.longitude = value;
	}

	public get Speed(): number {
		return this.speed;
	}

	public set Speed(value: number) {
		this.speed = value;
	}
    private speed: number;
}