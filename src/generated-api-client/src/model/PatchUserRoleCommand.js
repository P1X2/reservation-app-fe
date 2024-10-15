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
 * The PatchUserRoleCommand model module.
 * @module model/PatchUserRoleCommand
 * @version v0
 */
class PatchUserRoleCommand {
    /**
     * Constructs a new <code>PatchUserRoleCommand</code>.
     * @alias module:model/PatchUserRoleCommand
     * @param userId {Number} 
     * @param userRole {module:model/PatchUserRoleCommand.UserRoleEnum} 
     */
    constructor(userId, userRole) { 
        
        PatchUserRoleCommand.initialize(this, userId, userRole);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, userRole) { 
        obj['userId'] = userId;
        obj['userRole'] = userRole;
    }

    /**
     * Constructs a <code>PatchUserRoleCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchUserRoleCommand} obj Optional instance to populate.
     * @return {module:model/PatchUserRoleCommand} The populated <code>PatchUserRoleCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchUserRoleCommand();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('userRole')) {
                obj['userRole'] = ApiClient.convertToType(data['userRole'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchUserRoleCommand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchUserRoleCommand</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PatchUserRoleCommand.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['userRole'] && !(typeof data['userRole'] === 'string' || data['userRole'] instanceof String)) {
            throw new Error("Expected the field `userRole` to be a primitive type in the JSON string but got " + data['userRole']);
        }

        return true;
    }


}

PatchUserRoleCommand.RequiredProperties = ["userId", "userRole"];

/**
 * @member {Number} userId
 */
PatchUserRoleCommand.prototype['userId'] = undefined;

/**
 * @member {module:model/PatchUserRoleCommand.UserRoleEnum} userRole
 */
PatchUserRoleCommand.prototype['userRole'] = undefined;





/**
 * Allowed values for the <code>userRole</code> property.
 * @enum {String}
 * @readonly
 */
PatchUserRoleCommand['UserRoleEnum'] = {

    /**
     * value: "CLIENT"
     * @const
     */
    "CLIENT": "CLIENT",

    /**
     * value: "EMPLOYEE"
     * @const
     */
    "EMPLOYEE": "EMPLOYEE",

    /**
     * value: "PRESIDENT"
     * @const
     */
    "PRESIDENT": "PRESIDENT"
};



export default PatchUserRoleCommand;

