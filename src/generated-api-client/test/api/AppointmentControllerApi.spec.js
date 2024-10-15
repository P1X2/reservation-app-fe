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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiDefinition);
  }
}(this, function(expect, OpenApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiDefinition.AppointmentControllerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AppointmentControllerApi', function() {
    describe('createNewAppointment', function() {
      it('should call createNewAppointment successfully', function(done) {
        //uncomment below and update the code to test createNewAppointment
        //instance.createNewAppointment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppointment', function() {
      it('should call deleteAppointment successfully', function(done) {
        //uncomment below and update the code to test deleteAppointment
        //instance.deleteAppointment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppointmentsByDate', function() {
      it('should call getAppointmentsByDate successfully', function(done) {
        //uncomment below and update the code to test getAppointmentsByDate
        //instance.getAppointmentsByDate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppointmentsByUserId', function() {
      it('should call getAppointmentsByUserId successfully', function(done) {
        //uncomment below and update the code to test getAppointmentsByUserId
        //instance.getAppointmentsByUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAppointmentStatus', function() {
      it('should call updateAppointmentStatus successfully', function(done) {
        //uncomment below and update the code to test updateAppointmentStatus
        //instance.updateAppointmentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));