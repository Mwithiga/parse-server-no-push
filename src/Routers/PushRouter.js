import PromiseRouter from '../PromiseRouter';
import * as middleware from '../middlewares';
import { Parse } from 'parse/node';

export class PushRouter extends PromiseRouter {
  mountRoutes() {
    this.route('POST', '/push', middleware.promiseEnforceMasterKeyAccess, PushRouter.handlePOST);
  }

  static handlePOST(req) {
    // Always return success, but do nothing
    req.config.loggerController.info('PushRouter: Push endpoint disabled in this build.');
    return {
      response: {
        result: false,
        message: 'Push notifications are disabled in this Parse Server build.'
      }
    };
  }
}

export default PushRouter;
