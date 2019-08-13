/*
 * @Descripttion: 
 * @version: 
 * @Author: 笑佛弥勒
 * @Date: 2019-08-05 20:17:58
 * @LastEditors: 笑佛弥勒
 * @LastEditTime: 2019-08-13 20:28:17
 */
'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { router, controller } = app;
  router.get('/', controller.user.index);
  router.post('/login', controller.admin.login);
  router.post('/updateAvatar', controller.admin.updateAvatar);
  app.resources('users', '/users', app.controller.user);
  app.resources('posts', '/posts', app.controller.post);
}
