import { HttpHelper } from '@n7-frontend/n7-muruca-middleware';
import {Request} from 'express';


export class CustomController {
    public readonly config: any;

    constructor(config: any) {
        this.config = config;
    }
    getTest = async (request: Request)=> {
        return HttpHelper.returnOkResponse("this is the custom get test handler");
    }
}

