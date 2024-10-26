# OpenApiDefinition.AuthControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthControllerApi.md#login) | **POST** /login | 
[**registerUser**](AuthControllerApi.md#registerUser) | **POST** /register | 



## login

> String login(loginUserCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AuthControllerApi();
let loginUserCommand = new OpenApiDefinition.LoginUserCommand(); // LoginUserCommand | 
apiInstance.login(loginUserCommand, (error, data, response) => {
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
 **loginUserCommand** | [**LoginUserCommand**](LoginUserCommand.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## registerUser

> RegisterUserResponseDto registerUser(registerUserCommand)



### Example

```javascript
import OpenApiDefinition from 'open_api_definition';

let apiInstance = new OpenApiDefinition.AuthControllerApi();
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

