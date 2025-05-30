import { flagProps } from "../model/flags-model";

export interface IFlagsSearch {
  execute(): Promise<flagProps[]>;
}
