import { TempInfo } from './temp-info';
import { Idcheck } from './idcheck';

export interface Container {
    main: TempInfo;
    name: string;
    sys: Idcheck;
}
