interface IObjectKeys {
  [key: string]: string | undefined | boolean | number | Date;
}


export interface WindFarm extends IObjectKeys {
  id?: number;
  name?: string;
  activeHoursStart?: number;
  activeHoursEnd?: number;
  totalCapacity?: number;
  workCapacity?: number;
}

export interface MeterReadings {
  capacityFactor: number;
  windFarm: WindFarm;
}
