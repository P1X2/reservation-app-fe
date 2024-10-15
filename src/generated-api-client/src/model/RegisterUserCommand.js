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
 * The RegisterUserCommand model module.
 * @module model/RegisterUserCommand
 * @version v0
 */
class RegisterUserCommand {
    /**
     * Constructs a new <code>RegisterUserCommand</code>.
     * @alias module:model/RegisterUserCommand
     * @param username {String} 
     * @param password {String} 
     * @param email {String} 
     * @param name {String} 
     * @param surname {String} 
     */
    constructor(username, password, email, name, surname) { 
        
        RegisterUserCommand.initialize(this, username, password, email, name, surname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password, email, name, surname) { 
        obj['username'] = username;
        obj['password'] = password;
        obj['email'] = email;
        obj['name'] = name;
        obj['surname'] = surname;
    }

    /**
     * Constructs a <code>RegisterUserCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterUserCommand} obj Optional instance to populate.
     * @return {module:model/RegisterUserCommand} The populated <code>RegisterUserCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterUserCommand();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegisterUserCommand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegisterUserCommand</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RegisterUserCommand.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
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

        return true;
    }


}

RegisterUserCommand.RequiredProperties = ["username", "password", "email", "name", "surname"];

/**
 * @member {String} username
 */
RegisterUserCommand.prototype['username'] = undefined;

/**
 * @member {String} password
 */
RegisterUserCommand.prototype['password'] = undefined;

/**
 * @member {String} email
 */
RegisterUserCommand.prototype['email'] = undefined;

/**
 * @member {String} name
 */
RegisterUserCommand.prototype['name'] = undefined;

/**
 * @member {String} surname
 */
RegisterUserCommand.prototype['surname'] = undefined;






export default RegisterUserCommand;
