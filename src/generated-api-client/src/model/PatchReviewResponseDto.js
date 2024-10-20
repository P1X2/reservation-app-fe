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

import ApiClient from '../ApiClient';
import GetAppointmentDto from './GetAppointmentDto';

/**
 * The PatchReviewResponseDto model module.
 * @module model/PatchReviewResponseDto
 * @version v0
 */
class PatchReviewResponseDto {
    /**
     * Constructs a new <code>PatchReviewResponseDto</code>.
     * @alias module:model/PatchReviewResponseDto
     */
    constructor() { 
        
        PatchReviewResponseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchReviewResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchReviewResponseDto} obj Optional instance to populate.
     * @return {module:model/PatchReviewResponseDto} The populated <code>PatchReviewResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchReviewResponseDto();

            if (data.hasOwnProperty('reviewContent')) {
                obj['reviewContent'] = ApiClient.convertToType(data['reviewContent'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('appointment')) {
                obj['appointment'] = GetAppointmentDto.constructFromObject(data['appointment']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchReviewResponseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchReviewResponseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reviewContent'] && !(typeof data['reviewContent'] === 'string' || data['reviewContent'] instanceof String)) {
            throw new Error("Expected the field `reviewContent` to be a primitive type in the JSON string but got " + data['reviewContent']);
        }
        // validate the optional field `appointment`
        if (data['appointment']) { // data not null
          GetAppointmentDto.validateJSON(data['appointment']);
        }

        return true;
    }


}



/**
 * @member {String} reviewContent
 */
PatchReviewResponseDto.prototype['reviewContent'] = undefined;

/**
 * @member {Number} rating
 */
PatchReviewResponseDto.prototype['rating'] = undefined;

/**
 * @member {Date} modifiedOn
 */
PatchReviewResponseDto.prototype['modifiedOn'] = undefined;

/**
 * @member {module:model/GetAppointmentDto} appointment
 */
PatchReviewResponseDto.prototype['appointment'] = undefined;






export default PatchReviewResponseDto;

