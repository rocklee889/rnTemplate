import {observable, action} from 'mobx';
import { paRequest } from '../common/util';

class Main {
    @observable haha = '';
}

const main = new Main;
export default main;