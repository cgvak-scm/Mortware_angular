// export const environment = {
//    production: true,
// //local iis
//   //apiUrl: 'http://172.16.20.219:8093/api/',
//    //public url
// apiUrl: 'http://136.232.210.42:8093/api/',
//       //js call
//   jsPath:'/assets/js/script.js',
// };

import { DynamicEnvironment } from './dynamic-environment';

class Environment extends DynamicEnvironment {

  public production: boolean;
  constructor() {
    super();
    this.production = true;
  }
}

export const environment = new Environment();
