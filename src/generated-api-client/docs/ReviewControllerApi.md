# OpenApiDefinition.ReviewControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNew**](ReviewControllerApi.md#addNew) | **POST** /review/add-review | 
[**delete1**](ReviewControllerApi.md#delete1) | **DELETE** /review/delete | 
[**getByService**](ReviewControllerApi.md#getByService) | **GET** /review/get-by-serviceId/{serviceId} | 
[**getsByUser**](ReviewControllerApi.md#getsByUser) | **GET** /review/get-by-userId/{userId} | 
[**patchReview**](ReviewControllerApi.md#patchReview) | **PATCH** /review/patch | 



## addNew

> addNew(appointmentId, addReviewCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ReviewControllerApi();
let appointmentId = 789; // Number | 
let addReviewCommand = new OpenApiDefinition.AddReviewCommand(); // AddReviewCommand | 
apiInstance.addNew(appointmentId, addReviewCommand, (error, data, response) => {
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
 **addReviewCommand** | [**AddReviewCommand**](AddReviewCommand.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## delete1

> delete1(reviewId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ReviewControllerApi();
let reviewId = 789; // Number | 
apiInstance.delete1(reviewId, (error, data, response) => {
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
 **reviewId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getByService

> PagedModelGetReviewDto getByService(serviceId, opts)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ReviewControllerApi();
let serviceId = 789; // Number | 
let opts = {
  'page': 0, // Number | 
  'pageSize': 2, // Number | 
  'sortBy': "'createdAt'", // String | 
  'sortDir': "'desc'" // String | 
};
apiInstance.getByService(serviceId, opts, (error, data, response) => {
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
 **page** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 2]
 **sortBy** | **String**|  | [optional] [default to &#39;createdAt&#39;]
 **sortDir** | **String**|  | [optional] [default to &#39;desc&#39;]

### Return type

[**PagedModelGetReviewDto**](PagedModelGetReviewDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getsByUser

> PagedModelGetReviewDto getsByUser(userId, opts)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ReviewControllerApi();
let userId = 789; // Number | 
let opts = {
  'page': 0, // Number | 
  'pageSize': 2, // Number | 
  'sortBy': "'createdAt'", // String | 
  'sortDir': "'desc'" // String | 
};
apiInstance.getsByUser(userId, opts, (error, data, response) => {
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
 **sortBy** | **String**|  | [optional] [default to &#39;createdAt&#39;]
 **sortDir** | **String**|  | [optional] [default to &#39;desc&#39;]

### Return type

[**PagedModelGetReviewDto**](PagedModelGetReviewDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## patchReview

> PatchReviewResponseDto patchReview(reviewId, addReviewCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ReviewControllerApi();
let reviewId = 789; // Number | 
let addReviewCommand = new OpenApiDefinition.AddReviewCommand(); // AddReviewCommand | 
apiInstance.patchReview(reviewId, addReviewCommand, (error, data, response) => {
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
 **reviewId** | **Number**|  | 
 **addReviewCommand** | [**AddReviewCommand**](AddReviewCommand.md)|  | 

### Return type

[**PatchReviewResponseDto**](PatchReviewResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

