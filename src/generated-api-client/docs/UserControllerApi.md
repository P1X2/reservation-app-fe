# OpenApiDefinition.UserControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](UserControllerApi.md#callDelete) | **DELETE** /user/delete | 
[**changePassword**](UserControllerApi.md#changePassword) | **PUT** /user/change-password | 
[**getById**](UserControllerApi.md#getById) | **GET** /user/get_by_id | 
[**patchUser**](UserControllerApi.md#patchUser) | **PATCH** /user/patch-user-data | 
[**patchUserRole**](UserControllerApi.md#patchUserRole) | **PATCH** /user/change-role | 
[**patchUserStatus**](UserControllerApi.md#patchUserStatus) | **PATCH** /user/change-status | 
[**registerUser**](UserControllerApi.md#registerUser) | **POST** /user/register | 



## callDelete

> callDelete(userId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let userId = 789; // Number | 
apiInstance.callDelete(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## changePassword

> changePassword(setUserPasswordCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let setUserPasswordCommand = new OpenApiDefinition.SetUserPasswordCommand(); // SetUserPasswordCommand | 
apiInstance.changePassword(setUserPasswordCommand, (error, data, response) => {
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
 **setUserPasswordCommand** | [**SetUserPasswordCommand**](SetUserPasswordCommand.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getById

> GetUserDto getById(userId)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let userId = 789; // Number | 
apiInstance.getById(userId, (error, data, response) => {
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

### Return type

[**GetUserDto**](GetUserDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## patchUser

> PatchUserResponseDto patchUser(patchUserCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let patchUserCommand = new OpenApiDefinition.PatchUserCommand(); // PatchUserCommand | 
apiInstance.patchUser(patchUserCommand, (error, data, response) => {
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
 **patchUserCommand** | [**PatchUserCommand**](PatchUserCommand.md)|  | 

### Return type

[**PatchUserResponseDto**](PatchUserResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## patchUserRole

> patchUserRole(patchUserRoleCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let patchUserRoleCommand = new OpenApiDefinition.PatchUserRoleCommand(); // PatchUserRoleCommand | 
apiInstance.patchUserRole(patchUserRoleCommand, (error, data, response) => {
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
 **patchUserRoleCommand** | [**PatchUserRoleCommand**](PatchUserRoleCommand.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## patchUserStatus

> patchUserStatus(patchUserStatusCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let patchUserStatusCommand = new OpenApiDefinition.PatchUserStatusCommand(); // PatchUserStatusCommand | 
apiInstance.patchUserStatus(patchUserStatusCommand, (error, data, response) => {
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
 **patchUserStatusCommand** | [**PatchUserStatusCommand**](PatchUserStatusCommand.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## registerUser

> RegisterUserResponseDto registerUser(registerUserCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.UserControllerApi();
let registerUserCommand = new OpenApiDefinition.RegisterUserCommand(); // RegisterUserCommand | 
apiInstance.registerUser(registerUserCommand, (error, data, response) => {
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
 **registerUserCommand** | [**RegisterUserCommand**](RegisterUserCommand.md)|  | 

### Return type

[**RegisterUserResponseDto**](RegisterUserResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

