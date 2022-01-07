import { BaseMethod } from '../../common/base-method.api';
import { PostEndpointEnum } from '../../common/const';
import { TBulletPrivateRes } from './bullet.type';

export class PostBulletPrivateReq extends BaseMethod<TBulletPrivateRes> {
    constructor() {
        super('POST', PostEndpointEnum.BULLET_PRIVATE);
    }
}
