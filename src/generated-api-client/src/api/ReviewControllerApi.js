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
import AddReviewCommand from '../model/AddReviewCommand';
import PagedModelGetReviewDto from '../model/PagedModelGetReviewDto';
import PatchReviewResponseDto from '../model/PatchReviewResponseDto';

/**
* ReviewController service.
* @module api/ReviewControllerApi
* @version v0
*/
export default class ReviewControllerApi {

    /**
    * Constructs a new ReviewControllerApi. 
    * @alias module:api/ReviewControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addNew operation.
     * @callback module:api/ReviewControllerApi~addNewCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} appointmentId 
     * @param {module:model/AddReviewCommand} addReviewCommand 
     * @param {module:api/ReviewControllerApi~addNewCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addNew(appointmentId, addReviewCommand, callback) {
      let postBody = addReviewCommand;
      // verify the required parameter 'appointmentId' is set
      if (appointmentId === undefined || appointmentId === null) {
        throw new Error("Missing the required parameter 'appointmentId' when calling addNew");
      }
      // verify the required parameter 'addReviewCommand' is set
      if (addReviewCommand === undefined || addReviewCommand === null) {
        throw new Error("Missing the required parameter 'addReviewCommand' when calling addNew");
      }

      let pathParams = {
      };
      let queryParams = {
        'appointmentId': appointmentId
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
        '/review/add-review', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete1 operation.
     * @callback module:api/ReviewControllerApi~delete1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} reviewId 
     * @param {module:api/ReviewControllerApi~delete1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    delete1(reviewId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling delete1");
      }

      let pathParams = {
      };
      let queryParams = {
        'reviewId': reviewId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/review/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByService operation.
     * @callback module:api/ReviewControllerApi~getByServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedModelGetReviewDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} serviceId 
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 0)] 
     * @param {Number} [pageSize = 2)] 
     * @param {String} [sortBy = 'created_at')] 
     * @param {String} [sortDir = 'desc')] 
     * @param {module:api/ReviewControllerApi~getByServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedModelGetReviewDto}
     */
    getByService(serviceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getByService");
      }

      let pathParams = {
        'serviceId': serviceId
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
      let returnType = PagedModelGetReviewDto;
      return this.apiClient.callApi(
        '/review/get-by-serviceId/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getsByUser operation.
     * @callback module:api/ReviewControllerApi~getsByUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagedModelGetReviewDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} userId 
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 0)] 
     * @param {Number} [pageSize = 2)] 
     * @param {String} [sortBy = 'created_at')] 
     * @param {String} [sortDir = 'desc')] 
     * @param {module:api/ReviewControllerApi~getsByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagedModelGetReviewDto}
     */
    getsByUser(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getsByUser");
      }

      let pathParams = {
        'userId': userId
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
      let returnType = PagedModelGetReviewDto;
      return this.apiClient.callApi(
        '/review/get-by-userId/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchReview operation.
     * @callback module:api/ReviewControllerApi~patchReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PatchReviewResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} reviewId 
     * @param {module:model/AddReviewCommand} addReviewCommand 
     * @param {module:api/ReviewControllerApi~patchReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PatchReviewResponseDto}
     */
    patchReview(reviewId, addReviewCommand, callback) {
      let postBody = addReviewCommand;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling patchReview");
      }
      // verify the required parameter 'addReviewCommand' is set
      if (addReviewCommand === undefined || addReviewCommand === null) {
        throw new Error("Missing the required parameter 'addReviewCommand' when calling patchReview");
      }

      let pathParams = {
      };
      let queryParams = {
        'reviewId': reviewId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = PatchReviewResponseDto;
      return this.apiClient.callApi(
        '/review/patch', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
