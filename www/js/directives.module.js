angular.module('starter.directives', ['ngResource'])
  .factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
  });
/**
 * Created by Administrator on 2017/9/13.
 */
