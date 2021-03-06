const crypto = require('crypto');

export class RandomUtils {

    public getRandomToken(size?: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            crypto.randomBytes((size? size : 48), (err: any, buffer: any) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(buffer.toString('hex'));
                }
            });
        });
    }
}
