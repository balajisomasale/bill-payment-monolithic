import { User } from './site/signup/User';
import { vendor } from './site/vendor-signup/vendor';

export interface Bill


{
id:number,
consumerid:String,
amt:number,
User:User,
vendor:vendor
}