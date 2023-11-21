import crypto from 'crypto';
import { Request, Response } from 'express';
import { testService } from '../../services';
import httpStatus from 'http-status';

type Params = unknown;
type ResBody = unknown;
type ReqBody = {
    id: string;
    decryptionKey: string;
};
type ReqQuery = unknown;

export const retrieve = async(
    req: Request<Params, ResBody, ReqBody, ReqQuery>,
    res: Response
) => {
    const {id, decryptionKey} = req.body;
    const item = await testService.getItemById(id);
    if(item){
        try{
        const decipher = crypto.createDecipheriv('aes-256-gcm', decryptionKey, item.iv);
        let decryptedValue = decipher.update(item.content, 'hex', 'utf8');
        return res.status(httpStatus.OK).json(JSON.parse(decryptedValue));
        }
        catch(err:any){
            console.log(err);
            return res.status(httpStatus.BAD_REQUEST).send([]);
        }
    }
    else{
        return res.status(httpStatus.BAD_REQUEST).send([]);
    }
}