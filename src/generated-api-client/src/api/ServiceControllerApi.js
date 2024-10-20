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


import ApiClient from "../ApiClient";
import AddServiceCommand from '../model/AddServiceCommand';
import GetServiceDto from '../model/GetServiceDto';
import PagedModelGetServiceDto from '../model/PagedModelGetServiceDto';
import PatchServiceCommand from '../model/PatchServiceCommand';
import PatchServiceResponseDto from '../model/PatchServiceResponseDto';

/**
* ServiceController service.
* @module api/ServiceControllerApi
* @version v0
*/
export default class ServiceControllerApi {

    /**
    * Constructs a new ServiceControllerApi. 
    * @alias module:api/ServiceControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addService operation.
     * @callback module:api/ServiceControllerApi~addServiceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/AddServiceCommand} addServiceCommand 
     * @param {module:api/ServiceControllerApi~addServiceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addService(addServiceCommand, callback) {
      let postBody = addServiceCommand;
      // verify the required parameter 'addServiceCommand' is set
      if (addServiceCommand === undefined || addServiceCommand === null) {
        throw new Error("Missing the required parameter 'addServiceCommand' when calling addService");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/service/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllServices operation.
     * @callback module:api/ServiceControllerApi~getAllServicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedModelGetServiceDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 0)] 
     * @param {Number} [pageSize = 2)] 
     * @param {String} [sortBy = 'createdAt')] 
     * @param {String} [sortDir = 'desc')] 
     * @param {module:api/ServiceControllerApi~getAllServicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedModelGetServiceDto}
     */
    getAllServices(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'sortBy': opts['sortBy'],
        'sortDir': opts['sortDir']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = PagedModelGetServiceDto;
      return this.apiClient.callApi(
        '/service/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceByID operation.
     * @callback module:api/ServiceControllerApi~getServiceByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetServiceDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} serviceId 
     * @param {module:api/ServiceControllerApi~getServiceByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetServiceDto}
     */
    getServiceByID(serviceId, callback) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getServiceByID");
      }

      let pathParams = {
        'serviceId': serviceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = GetServiceDto;
      return this.apiClient.callApi(
        '/service/by-id/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceByName operation.
     * @callback module:api/ServiceControllerApi~getServiceByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetServiceDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} name 
     * @param {module:api/ServiceControllerApi~getServiceByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetServiceDto}
     */
    getServiceByName(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getServiceByName");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = GetServiceDto;
      return this.apiClient.callApi(
        '/service/by-name/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchService operation.
     * @callback module:api/ServiceControllerApi~patchServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PatchServiceResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PatchServiceCommand} patchServiceCommand 
     * @param {module:api/ServiceControllerApi~patchServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PatchServiceResponseDto}
     */
    patchService(patchServiceCommand, callback) {
      let postBody = patchServiceCommand;
      // verify the required parameter 'patchServiceCommand' is set
      if (patchServiceCommand === undefined || patchServiceCommand === null) {
        throw new Error("Missing the required parameter 'patchServiceCommand' when calling patchService");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = PatchServiceResponseDto;
      return this.apiClient.callApi(
        '/service/patch', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
