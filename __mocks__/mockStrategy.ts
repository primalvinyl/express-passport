import { Request } from 'express';
import { Strategy } from 'passport';

export default class MockStrategy extends Strategy {
    verifyCallback: Function;

    constructor(verifyCallback: Function) {
        super();
        this.verifyCallback = verifyCallback;
    }

    authenticate(req: Request) {
        this.verifyCallback(
            req.body,
            (error: Error, user: Record<string, any>, info: Record<string, any>) => {
                if (error) this.error(error);
                else if (!user) this.fail(info);
                else this.success(user, info);
            }
        );
    }
}
