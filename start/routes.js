'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
Route.get('/tasks', 'TasksController.index')
Route.on('/add').render('add')
Route.post('/add', 'TasksController.store')
Route.get('/task/:id','TasksController.detail')
Route.get('remove/:id', 'TasksController.remove')


// Route.get('/test', () =>  'Hello, world!')
// Route.get('/test/:id', function({ params }){
//   return params.id;
// });

// Route.get('/tasks', 'TasksController.index');
