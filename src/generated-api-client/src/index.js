/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AddReviewCommand from './model/AddReviewCommand';
import AddServiceCommand from './model/AddServiceCommand';
import CreateAppointmentCommand from './model/CreateAppointmentCommand';
import CreateAppointmentResponseDto from './model/CreateAppointmentResponseDto';
import GetAppointmentDto from './model/GetAppointmentDto';
import GetReviewDto from './model/GetReviewDto';
import GetServiceDto from './model/GetServiceDto';
import GetUserDto from './model/GetUserDto';
import PageMetadata from './model/PageMetadata';
import PagedModelGetAppointmentDto from './model/PagedModelGetAppointmentDto';
import PagedModelGetReviewDto from './model/PagedModelGetReviewDto';
import PagedModelGetServiceDto from './model/PagedModelGetServiceDto';
import PatchReviewResponseDto from './model/PatchReviewResponseDto';
import PatchServiceCommand from './model/PatchServiceCommand';
import PatchServiceResponseDto from './model/PatchServiceResponseDto';
import PatchUserCommand from './model/PatchUserCommand';
import PatchUserResponseDto from './model/PatchUserResponseDto';
import PatchUserRoleCommand from './model/PatchUserRoleCommand';
import PatchUserStatusCommand from './model/PatchUserStatusCommand';
import RegisterUserCommand from './model/RegisterUserCommand';
import RegisterUserResponseDto from './model/RegisterUserResponseDto';
import SetUserPasswordCommand from './model/SetUserPasswordCommand';
import AppointmentControllerApi from './api/AppointmentControllerApi';
import ReviewControllerApi from './api/ReviewControllerApi';
import ServiceControllerApi from './api/ServiceControllerApi';
import UserControllerApi from './api/UserControllerApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OpenApiDefinition = require('index'); // See note below*.
* var xxxSvc = new OpenApiDefinition.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OpenApiDefinition.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OpenApiDefinition.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OpenApiDefinition.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AddReviewCommand model constructor.
     * @property {module:model/AddReviewCommand}
     */
    AddReviewCommand,

    /**
     * The AddServiceCommand model constructor.
     * @property {module:model/AddServiceCommand}
     */
    AddServiceCommand,

    /**
     * The CreateAppointmentCommand model constructor.
     * @property {module:model/CreateAppointmentCommand}
     */
    CreateAppointmentCommand,

    /**
     * The CreateAppointmentResponseDto model constructor.
     * @property {module:model/CreateAppointmentResponseDto}
     */
    CreateAppointmentResponseDto,

    /**
     * The GetAppointmentDto model constructor.
     * @property {module:model/GetAppointmentDto}
     */
    GetAppointmentDto,

    /**
     * The GetReviewDto model constructor.
     * @property {module:model/GetReviewDto}
     */
    GetReviewDto,

    /**
     * The GetServiceDto model constructor.
     * @property {module:model/GetServiceDto}
     */
    GetServiceDto,

    /**
     * The GetUserDto model constructor.
     * @property {module:model/GetUserDto}
     */
    GetUserDto,

    /**
     * The PageMetadata model constructor.
     * @property {module:model/PageMetadata}
     */
    PageMetadata,

    /**
     * The PagedModelGetAppointmentDto model constructor.
     * @property {module:model/PagedModelGetAppointmentDto}
     */
    PagedModelGetAppointmentDto,

    /**
     * The PagedModelGetReviewDto model constructor.
     * @property {module:model/PagedModelGetReviewDto}
     */
    PagedModelGetReviewDto,

    /**
     * The PagedModelGetServiceDto model constructor.
     * @property {module:model/PagedModelGetServiceDto}
     */
    PagedModelGetServiceDto,

    /**
     * The PatchReviewResponseDto model constructor.
     * @property {module:model/PatchReviewResponseDto}
     */
    PatchReviewResponseDto,

    /**
     * The PatchServiceCommand model constructor.
     * @property {module:model/PatchServiceCommand}
     */
    PatchServiceCommand,

    /**
     * The PatchServiceResponseDto model constructor.
     * @property {module:model/PatchServiceResponseDto}
     */
    PatchServiceResponseDto,

    /**
     * The PatchUserCommand model constructor.
     * @property {module:model/PatchUserCommand}
     */
    PatchUserCommand,

    /**
     * The PatchUserResponseDto model constructor.
     * @property {module:model/PatchUserResponseDto}
     */
    PatchUserResponseDto,

    /**
     * The PatchUserRoleCommand model constructor.
     * @property {module:model/PatchUserRoleCommand}
     */
    PatchUserRoleCommand,

    /**
     * The PatchUserStatusCommand model constructor.
     * @property {module:model/PatchUserStatusCommand}
     */
    PatchUserStatusCommand,

    /**
     * The RegisterUserCommand model constructor.
     * @property {module:model/RegisterUserCommand}
     */
    RegisterUserCommand,

    /**
     * The RegisterUserResponseDto model constructor.
     * @property {module:model/RegisterUserResponseDto}
     */
    RegisterUserResponseDto,

    /**
     * The SetUserPasswordCommand model constructor.
     * @property {module:model/SetUserPasswordCommand}
     */
    SetUserPasswordCommand,

    /**
    * The AppointmentControllerApi service constructor.
    * @property {module:api/AppointmentControllerApi}
    */
    AppointmentControllerApi,

    /**
    * The ReviewControllerApi service constructor.
    * @property {module:api/ReviewControllerApi}
    */
    ReviewControllerApi,

    /**
    * The ServiceControllerApi service constructor.
    * @property {module:api/ServiceControllerApi}
    */
    ServiceControllerApi,

    /**
    * The UserControllerApi service constructor.
    * @property {module:api/UserControllerApi}
    */
    UserControllerApi
};