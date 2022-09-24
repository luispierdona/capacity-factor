interface IObjectKeys {
  [key: string]: string | undefined | boolean | number | Date;
}


export interface WindFarm extends IObjectKeys {
  id: string;
  name: string;
  activeHoursStart: Date;
  activeHoursEnd: Date;
  totalCapacity: number;
  meterReadings: number;

}
