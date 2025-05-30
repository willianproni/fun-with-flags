import { flagProps } from "../model/flags-model";

export interface ISearchFlags {
  execute(): Promise<flagProps[]>;
}
