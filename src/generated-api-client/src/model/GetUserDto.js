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
 * The GetUserDto model module.
 * @module model/GetUserDto
 * @version v0
 */
class GetUserDto {
    /**
     * Constructs a new <code>GetUserDto</code>.
     * @alias module:model/GetUserDto
     */
    constructor() { 
        
        GetUserDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetUserDto} obj Optional instance to populate.
     * @return {module:model/GetUserDto} The populated <code>GetUserDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserDto();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('userStatus')) {
                obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetUserDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetUserDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['surname'] && !(typeof data['surname'] === 'string' || data['surname'] instanceof String)) {
            throw new Error("Expected the field `surname` to be a primitive type in the JSON string but got " + data['surname']);
        }
        // ensure the json data is a string
        if (data['userStatus'] && !(typeof data['userStatus'] === 'string' || data['userStatus'] instanceof String)) {
            throw new Error("Expected the field `userStatus` to be a primitive type in the JSON string but got " + data['userStatus']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}



/**
 * @member {Number} userId
 */
GetUserDto.prototype['userId'] = undefined;

/**
 * @member {String} username
 */
GetUserDto.prototype['username'] = undefined;

/**
 * @member {String} email
 */
GetUserDto.prototype['email'] = undefined;

/**
 * @member {String} name
 */
GetUserDto.prototype['name'] = undefined;

/**
 * @member {String} surname
 */
GetUserDto.prototype['surname'] = undefined;

/**
 * @member {module:model/GetUserDto.UserStatusEnum} userStatus
 */
GetUserDto.prototype['userStatus'] = undefined;

/**
 * @member {module:model/GetUserDto.RoleEnum} role
 */
GetUserDto.prototype['role'] = undefined;

/**
 * @member {Date} createdAt
 */
GetUserDto.prototype['createdAt'] = undefined;

/**
 * @member {Date} modifiedOn
 */
GetUserDto.prototype['modifiedOn'] = undefined;





/**
 * Allowed values for the <code>userStatus</code> property.
 * @enum {String}
 * @readonly
 */
GetUserDto['UserStatusEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "SUSPENDED"
     * @const
     */
    "SUSPENDED": "SUSPENDED"
};


/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
GetUserDto['RoleEnum'] = {

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



export default GetUserDto;

