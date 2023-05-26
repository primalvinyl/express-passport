import { Application, Request, Response, NextFunction } from 'express';

export default (app: Application) => {
    app.use(
        (
            error: any,
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            const status = error.status || 400;
            const message = error.message || '';
            res.status(status).json({
                message: message,
                error: true
            });
        }
    );
};
