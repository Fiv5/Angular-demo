import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHerosSlow(): Promise<Hero[]> {
        return new Promise(
            resolve => {
                setTimeout(() => resolve(this.getHeros()), 2000);
            }
        );
        // 模拟慢网速
    }
}
