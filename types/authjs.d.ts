import { type DefaultSession } from "next-auth";    //argument declaration tipe typescript
import {JWT} from 'next-auth/jwt';

declare module "next-auth"{
    interface session {
        user: User & DefaultSession["user"];
    }
    interface User {
        role: string;
    }
}
 declare module "next-auth/jwt"{

    interface JWT {
        role: string; 
    }
 }
 declare module "next-auth/jwt"{
    interface JWT {
        sub: string;
        role: string;
    }
 }