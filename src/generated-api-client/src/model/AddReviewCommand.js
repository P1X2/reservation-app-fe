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
 * The AddReviewCommand model module.
 * @module model/AddReviewCommand
 * @version v0
 */
class AddReviewCommand {
    /**
     * Constructs a new <code>AddReviewCommand</code>.
     * @alias module:model/AddReviewCommand
     * @param rating {Number} 
     */
    constructor(rating) { 
        
        AddReviewCommand.initialize(this, rating);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rating) { 
        obj['rating'] = rating;
    }

    /**
     * Constructs a <code>AddReviewCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddReviewCommand} obj Optional instance to populate.
     * @return {module:model/AddReviewCommand} The populated <code>AddReviewCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddReviewCommand();

            if (data.hasOwnProperty('reviewContent')) {
                obj['reviewContent'] = ApiClient.convertToType(data['reviewContent'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddReviewCommand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddReviewCommand</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddReviewCommand.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['reviewContent'] && !(typeof data['reviewContent'] === 'string' || data['reviewContent'] instanceof String)) {
            throw new Error("Expected the field `reviewContent` to be a primitive type in the JSON string but got " + data['reviewContent']);
        }

        return true;
    }


}

AddReviewCommand.RequiredProperties = ["rating"];

/**
 * @member {String} reviewContent
 */
AddReviewCommand.prototype['reviewContent'] = undefined;

/**
 * @member {Number} rating
 */
AddReviewCommand.prototype['rating'] = undefined;






export default AddReviewCommand;
