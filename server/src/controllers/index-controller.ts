import {Request, Response } from 'express';

class IndexController {
    
    public index(req: Request, res: Response) {
        res.json({ text: "API está en api/index" });
    }   
}

export const indexController = new IndexController();