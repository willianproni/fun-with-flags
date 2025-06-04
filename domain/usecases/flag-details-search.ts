import { flagDetailsProps } from "../model/flags-model";

export interface IFlagDatailsSearch {
  execute(acronym: string): Promise<flagDetailsProps>;
}
