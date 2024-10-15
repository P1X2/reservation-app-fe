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
import GetServiceDto from './GetServiceDto';
import GetUserDto from './GetUserDto';

/**
 * The CreateAppointmentResponseDto model module.
 * @module model/CreateAppointmentResponseDto
 * @version v0
 */
class CreateAppointmentResponseDto {
    /**
     * Constructs a new <code>CreateAppointmentResponseDto</code>.
     * @alias module:model/CreateAppointmentResponseDto
     */
    constructor() { 
        
        CreateAppointmentResponseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAppointmentResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAppointmentResponseDto} obj Optional instance to populate.
     * @return {module:model/CreateAppointmentResponseDto} The populated <code>CreateAppointmentResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAppointmentResponseDto();

            if (data.hasOwnProperty('appointmentDate')) {
                obj['appointmentDate'] = ApiClient.convertToType(data['appointmentDate'], 'Date');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = GetServiceDto.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = GetUserDto.constructFromObject(data['client']);
            }
            if (data.hasOwnProperty('employee')) {
                obj['employee'] = GetUserDto.constructFromObject(data['employee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAppointmentResponseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAppointmentResponseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `service`
        if (data['service']) { // data not null
          GetServiceDto.validateJSON(data['service']);
        }
        // validate the optional field `client`
        if (data['client']) { // data not null
          GetUserDto.validateJSON(data['client']);
        }
        // validate the optional field `employee`
        if (data['employee']) { // data not null
          GetUserDto.validateJSON(data['employee']);
        }

        return true;
    }


}



/**
 * @member {Date} appointmentDate
 */
CreateAppointmentResponseDto.prototype['appointmentDate'] = undefined;

/**
 * @member {Date} createdAt
 */
CreateAppointmentResponseDto.prototype['createdAt'] = undefined;

/**
 * @member {Date} modifiedOn
 */
CreateAppointmentResponseDto.prototype['modifiedOn'] = undefined;

/**
 * @member {module:model/CreateAppointmentResponseDto.StatusEnum} status
 */
CreateAppointmentResponseDto.prototype['status'] = undefined;

/**
 * @member {module:model/GetServiceDto} service
 */
CreateAppointmentResponseDto.prototype['service'] = undefined;

/**
 * @member {module:model/GetUserDto} client
 */
CreateAppointmentResponseDto.prototype['client'] = undefined;

/**
 * @member {module:model/GetUserDto} employee
 */
CreateAppointmentResponseDto.prototype['employee'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CreateAppointmentResponseDto['StatusEnum'] = {

    /**
     * value: "PENDING_PAYMENT"
     * @const
     */
    "PENDING_PAYMENT": "PENDING_PAYMENT",

    /**
     * value: "DONE_PAYMENT"
     * @const
     */
    "DONE_PAYMENT": "DONE_PAYMENT",

    /**
     * value: "APPOINTMENT_CONFIRMED"
     * @const
     */
    "APPOINTMENT_CONFIRMED": "APPOINTMENT_CONFIRMED",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",

    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED"
};



export default CreateAppointmentResponseDto;
