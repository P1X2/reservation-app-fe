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

/**
 * The PatchServiceResponseDto model module.
 * @module model/PatchServiceResponseDto
 * @version v0
 */
class PatchServiceResponseDto {
    /**
     * Constructs a new <code>PatchServiceResponseDto</code>.
     * @alias module:model/PatchServiceResponseDto
     */
    constructor() { 
        
        PatchServiceResponseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchServiceResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchServiceResponseDto} obj Optional instance to populate.
     * @return {module:model/PatchServiceResponseDto} The populated <code>PatchServiceResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchServiceResponseDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('durationMinutes')) {
                obj['durationMinutes'] = ApiClient.convertToType(data['durationMinutes'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchServiceResponseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchServiceResponseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
PatchServiceResponseDto.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PatchServiceResponseDto.prototype['description'] = undefined;

/**
 * @member {Number} durationMinutes
 */
PatchServiceResponseDto.prototype['durationMinutes'] = undefined;

/**
 * @member {Number} price
 */
PatchServiceResponseDto.prototype['price'] = undefined;

/**
 * @member {Date} modifiedOn
 */
PatchServiceResponseDto.prototype['modifiedOn'] = undefined;






export default PatchServiceResponseDto;

