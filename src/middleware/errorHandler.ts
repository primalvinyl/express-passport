import { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export default (app: Application) => {
    app.use(
        (
            err: ErrorRequestHandler,
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            res.status(400).json({
                error_message: err,
                error: true
            });
        }
    );
};
