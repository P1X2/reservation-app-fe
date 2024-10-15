# OpenApiDefinition.AppointmentControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewAppointment**](AppointmentControllerApi.md#createNewAppointment) | **POST** /appointment/create | 
[**deleteAppointment**](AppointmentControllerApi.md#deleteAppointment) | **DELETE** /appointment/delete | 
[**getAppointmentsByDate**](AppointmentControllerApi.md#getAppointmentsByDate) | **GET** /appointment/get-by-date | 
[**getAppointmentsByUserId**](AppointmentControllerApi.md#getAppointmentsByUserId) | **GET** /appointment/get-by-userId/{userId} | 
[**updateAppointmentStatus**](AppointmentControllerApi.md#updateAppointmentStatus) | **PUT** /appointment/update-status/{appointmentId} | 



## createNewAppointment

> CreateAppointmentResponseDto createNewAppointment(createAppointmentCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AppointmentControllerApi();
let createAppointmentCommand = new OpenApiDefinition.CreateAppointmentCommand(); // CreateAppointmentCommand | 
apiInstance.createNewAppointment(createAppointmentCommand, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAppointmentCommand** | [**CreateAppointmentCommand**](CreateAppointmentCommand.md)|  | 

### Return type

[**CreateAppointmentResponseDto**](CreateAppointmentResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deleteAppointment

> deleteAppointment(appointmentId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AppointmentControllerApi();
let appointmentId = 789; // Number | 
apiInstance.deleteAppointment(appointmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointmentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAppointmentsByDate

> PagedModelGetAppointmentDto getAppointmentsByDate(date, opts)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AppointmentControllerApi();
let date = new Date("2013-10-20"); // Date | 
let opts = {
  'page': 0, // Number | 
  'pageSize': 2, // Number | 
  'sortBy': "'appointmentDate'", // String | 
  'sortDir': "'asc'" // String | 
};
apiInstance.getAppointmentsByDate(date, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**|  | 
 **page** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 2]
 **sortBy** | **String**|  | [optional] [default to &#39;appointmentDate&#39;]
 **sortDir** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**PagedModelGetAppointmentDto**](PagedModelGetAppointmentDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getAppointmentsByUserId

> PagedModelGetAppointmentDto getAppointmentsByUserId(userId, opts)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AppointmentControllerApi();
let userId = 789; // Number | 
let opts = {
  'page': 0, // Number | 
  'pageSize': 2, // Number | 
  'sortBy': "'appointmentDate'", // String | 
  'sortDir': "'asc'" // String | 
};
apiInstance.getAppointmentsByUserId(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **page** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 2]
 **sortBy** | **String**|  | [optional] [default to &#39;appointmentDate&#39;]
 **sortDir** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**PagedModelGetAppointmentDto**](PagedModelGetAppointmentDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateAppointmentStatus

> updateAppointmentStatus(appointmentId, newStatus)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AppointmentControllerApi();
let appointmentId = 789; // Number | 
let newStatus = "newStatus_example"; // String | 
apiInstance.updateAppointmentStatus(appointmentId, newStatus, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appointmentId** | **Number**|  | 
 **newStatus** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

