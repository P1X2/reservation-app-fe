# OpenApiDefinition.ServiceControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addService**](ServiceControllerApi.md#addService) | **POST** /service/add | 
[**getAllServices**](ServiceControllerApi.md#getAllServices) | **GET** /service/all | 
[**getServiceByID**](ServiceControllerApi.md#getServiceByID) | **GET** /service/by-id/{serviceId} | 
[**getServiceByName**](ServiceControllerApi.md#getServiceByName) | **GET** /service/by-name/{name} | 
[**patchService**](ServiceControllerApi.md#patchService) | **PUT** /service/patch | 



## addService

> addService(addServiceCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let addServiceCommand = new OpenApiDefinition.AddServiceCommand(); // AddServiceCommand | 
apiInstance.addService(addServiceCommand, (error, data, response) => {
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
 **addServiceCommand** | [**AddServiceCommand**](AddServiceCommand.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getAllServices

> PagedModelGetServiceDto getAllServices(opts)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let opts = {
  'page': 0, // Number | 
  'pageSize': 2, // Number | 
  'sortBy': "'createdAt'", // String | 
  'sortDir': "'desc'" // String | 
};
apiInstance.getAllServices(opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 2]
 **sortBy** | **String**|  | [optional] [default to &#39;createdAt&#39;]
 **sortDir** | **String**|  | [optional] [default to &#39;desc&#39;]

### Return type

[**PagedModelGetServiceDto**](PagedModelGetServiceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getServiceByID

> GetServiceDto getServiceByID(serviceId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let serviceId = 789; // Number | 
apiInstance.getServiceByID(serviceId, (error, data, response) => {
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
 **serviceId** | **Number**|  | 

### Return type

[**GetServiceDto**](GetServiceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getServiceByName

> GetServiceDto getServiceByName(name)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let name = "name_example"; // String | 
apiInstance.getServiceByName(name, (error, data, response) => {
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
 **name** | **String**|  | 

### Return type

[**GetServiceDto**](GetServiceDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## patchService

> PatchServiceResponseDto patchService(patchServiceCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ServiceControllerApi();
let patchServiceCommand = new OpenApiDefinition.PatchServiceCommand(); // PatchServiceCommand | 
apiInstance.patchService(patchServiceCommand, (error, data, response) => {
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
 **patchServiceCommand** | [**PatchServiceCommand**](PatchServiceCommand.md)|  | 

### Return type

[**PatchServiceResponseDto**](PatchServiceResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

