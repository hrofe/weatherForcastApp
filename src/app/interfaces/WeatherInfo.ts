export interface WeatherForcasts {
  DailyForecasts:WeatherInfo[]
}


export interface WeatherInfo {
  Date: Date,
  Temperature: TemperatureValue,
  Day: Icons,
  Night:Icons
}

export interface TemperatureUnit {
  Value: number,
  Unit: string,
  UnitType:number
}


export interface TemperatureValue {
  Minimum: TemperatureUnit,
  Maximum: TemperatureUnit
}

export interface Icons {
  Icon: number,
  IconPhrase: string,
  HasPrecipitation: boolean
}

export interface Cities {
  Cities: City[];
}


export interface City {
  Key: string,
  EnglishName: string,
  LocalizedName:string
}
