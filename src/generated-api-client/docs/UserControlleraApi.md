# OpenApiDefinition.UserControlleraApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentUserDetails**](UserControlleraApi.md#getCurrentUserDetails) | **GET** /current-user | 



## getCurrentUserDetails

> String getCurrentUserDetails()



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControlleraApi();
apiInstance.getCurrentUserDetails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

