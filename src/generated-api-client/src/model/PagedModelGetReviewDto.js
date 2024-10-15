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
import GetReviewDto from './GetReviewDto';
import PageMetadata from './PageMetadata';

/**
 * The PagedModelGetReviewDto model module.
 * @module model/PagedModelGetReviewDto
 * @version v0
 */
class PagedModelGetReviewDto {
    /**
     * Constructs a new <code>PagedModelGetReviewDto</code>.
     * @alias module:model/PagedModelGetReviewDto
     */
    constructor() { 
        
        PagedModelGetReviewDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PagedModelGetReviewDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagedModelGetReviewDto} obj Optional instance to populate.
     * @return {module:model/PagedModelGetReviewDto} The populated <code>PagedModelGetReviewDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PagedModelGetReviewDto();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [GetReviewDto]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = PageMetadata.constructFromObject(data['page']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PagedModelGetReviewDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PagedModelGetReviewDto</code>.
     */
    static validateJSON(data) {
        if (data['content']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['content'])) {
                throw new Error("Expected the field `content` to be an array in the JSON data but got " + data['content']);
            }
            // validate the optional field `content` (array)
            for (const item of data['content']) {
                GetReviewDto.validateJSON(item);
            };
        }
        // validate the optional field `page`
        if (data['page']) { // data not null
          PageMetadata.validateJSON(data['page']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/GetReviewDto>} content
 */
PagedModelGetReviewDto.prototype['content'] = undefined;

/**
 * @member {module:model/PageMetadata} page
 */
PagedModelGetReviewDto.prototype['page'] = undefined;






export default PagedModelGetReviewDto;

