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
 * The CreateAppointmentCommand model module.
 * @module model/CreateAppointmentCommand
 * @version v0
 */
class CreateAppointmentCommand {
    /**
     * Constructs a new <code>CreateAppointmentCommand</code>.
     * @alias module:model/CreateAppointmentCommand
     */
    constructor() { 
        
        CreateAppointmentCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAppointmentCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAppointmentCommand} obj Optional instance to populate.
     * @return {module:model/CreateAppointmentCommand} The populated <code>CreateAppointmentCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAppointmentCommand();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('employeeId')) {
                obj['employeeId'] = ApiClient.convertToType(data['employeeId'], 'Number');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'Number');
            }
            if (data.hasOwnProperty('appointmentDate')) {
                obj['appointmentDate'] = ApiClient.convertToType(data['appointmentDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAppointmentCommand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAppointmentCommand</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} clientId
 */
CreateAppointmentCommand.prototype['clientId'] = undefined;

/**
 * @member {Number} employeeId
 */
CreateAppointmentCommand.prototype['employeeId'] = undefined;

/**
 * @member {Number} serviceId
 */
CreateAppointmentCommand.prototype['serviceId'] = undefined;

/**
 * @member {Date} appointmentDate
 */
CreateAppointmentCommand.prototype['appointmentDate'] = undefined;






export default CreateAppointmentCommand;

