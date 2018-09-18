import { IStop }  from './stop.interface';

export interface ILine {
    id: string,
    name:string,
    Stops:IStop[]   
}