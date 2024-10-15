# OpenApiDefinition.CreateAppointmentResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointmentDate** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**service** | [**GetServiceDto**](GetServiceDto.md) |  | [optional] 
**client** | [**GetUserDto**](GetUserDto.md) |  | [optional] 
**employee** | [**GetUserDto**](GetUserDto.md) |  | [optional] 



## Enum: StatusEnum


* `PENDING_PAYMENT` (value: `"PENDING_PAYMENT"`)

* `DONE_PAYMENT` (value: `"DONE_PAYMENT"`)

* `APPOINTMENT_CONFIRMED` (value: `"APPOINTMENT_CONFIRMED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `CANCELED` (value: `"CANCELED"`)




