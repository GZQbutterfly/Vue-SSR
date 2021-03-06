import Vue from 'vue';

import { createRouter } from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
    const router = createRouter();

    sync(store, router);

    const app = new Vue({
        store,
        router,
        template: '<router-view></router-view>'
    });
    
    return { app, router, store };
}
