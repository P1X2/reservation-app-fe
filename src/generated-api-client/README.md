# open_api_definition

OpenApiDefinition - JavaScript client for open_api_definition
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0
- Package version: v0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install open_api_definition --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your open_api_definition from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenApiDefinition = require('open_api_definition');


var api = new OpenApiDefinition.AppointmentControllerApi()
var createAppointmentCommand = new OpenApiDefinition.CreateAppointmentCommand(); // {CreateAppointmentCommand} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createNewAppointment(createAppointmentCommand, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenApiDefinition.AppointmentControllerApi* | [**createNewAppointment**](docs/AppointmentControllerApi.md#createNewAppointment) | **POST** /appointment/create | 
*OpenApiDefinition.AppointmentControllerApi* | [**deleteAppointment**](docs/AppointmentControllerApi.md#deleteAppointment) | **DELETE** /appointment/delete | 
*OpenApiDefinition.AppointmentControllerApi* | [**getAppointmentsByDate**](docs/AppointmentControllerApi.md#getAppointmentsByDate) | **GET** /appointment/get-by-date | 
*OpenApiDefinition.AppointmentControllerApi* | [**getAppointmentsByUserId**](docs/AppointmentControllerApi.md#getAppointmentsByUserId) | **GET** /appointment/get-by-userId/{userId} | 
*OpenApiDefinition.AppointmentControllerApi* | [**updateAppointmentStatus**](docs/AppointmentControllerApi.md#updateAppointmentStatus) | **PUT** /appointment/update-status/{appointmentId} | 
*OpenApiDefinition.ReviewControllerApi* | [**addNew**](docs/ReviewControllerApi.md#addNew) | **POST** /review/add-review | 
*OpenApiDefinition.ReviewControllerApi* | [**delete1**](docs/ReviewControllerApi.md#delete1) | **DELETE** /review/delete | 
*OpenApiDefinition.ReviewControllerApi* | [**getByService**](docs/ReviewControllerApi.md#getByService) | **GET** /review/get-by-serviceId/{serviceId} | 
*OpenApiDefinition.ReviewControllerApi* | [**getsByUser**](docs/ReviewControllerApi.md#getsByUser) | **GET** /review/get-by-userId/{userId} | 
*OpenApiDefinition.ReviewControllerApi* | [**patchReview**](docs/ReviewControllerApi.md#patchReview) | **PATCH** /review/patch | 
*OpenApiDefinition.ServiceControllerApi* | [**addService**](docs/ServiceControllerApi.md#addService) | **POST** /service/add | 
*OpenApiDefinition.ServiceControllerApi* | [**getAllServices**](docs/ServiceControllerApi.md#getAllServices) | **GET** /service/all | 
*OpenApiDefinition.ServiceControllerApi* | [**getServiceByID**](docs/ServiceControllerApi.md#getServiceByID) | **GET** /service/by-id/{serviceId} | 
*OpenApiDefinition.ServiceControllerApi* | [**getServiceByName**](docs/ServiceControllerApi.md#getServiceByName) | **GET** /service/by-name/{name} | 
*OpenApiDefinition.ServiceControllerApi* | [**patchService**](docs/ServiceControllerApi.md#patchService) | **PUT** /service/patch | 
*OpenApiDefinition.UserControllerApi* | [**callDelete**](docs/UserControllerApi.md#callDelete) | **DELETE** /user/delete | 
*OpenApiDefinition.UserControllerApi* | [**changePassword**](docs/UserControllerApi.md#changePassword) | **PUT** /user/change-password | 
*OpenApiDefinition.UserControllerApi* | [**getById**](docs/UserControllerApi.md#getById) | **GET** /user/get_by_id | 
*OpenApiDefinition.UserControllerApi* | [**patchUser**](docs/UserControllerApi.md#patchUser) | **PATCH** /user/patch-user-data | 
*OpenApiDefinition.UserControllerApi* | [**patchUserRole**](docs/UserControllerApi.md#patchUserRole) | **PATCH** /user/change-role | 
*OpenApiDefinition.UserControllerApi* | [**patchUserStatus**](docs/UserControllerApi.md#patchUserStatus) | **PATCH** /user/change-status | 
*OpenApiDefinition.UserControllerApi* | [**registerUser**](docs/UserControllerApi.md#registerUser) | **POST** /user/register | 


## Documentation for Models

 - [OpenApiDefinition.AddReviewCommand](docs/AddReviewCommand.md)
 - [OpenApiDefinition.AddServiceCommand](docs/AddServiceCommand.md)
 - [OpenApiDefinition.CreateAppointmentCommand](docs/CreateAppointmentCommand.md)
 - [OpenApiDefinition.CreateAppointmentResponseDto](docs/CreateAppointmentResponseDto.md)
 - [OpenApiDefinition.GetAppointmentDto](docs/GetAppointmentDto.md)
 - [OpenApiDefinition.GetReviewDto](docs/GetReviewDto.md)
 - [OpenApiDefinition.GetServiceDto](docs/GetServiceDto.md)
 - [OpenApiDefinition.GetUserDto](docs/GetUserDto.md)
 - [OpenApiDefinition.PageMetadata](docs/PageMetadata.md)
 - [OpenApiDefinition.PagedModelGetAppointmentDto](docs/PagedModelGetAppointmentDto.md)
 - [OpenApiDefinition.PagedModelGetReviewDto](docs/PagedModelGetReviewDto.md)
 - [OpenApiDefinition.PagedModelGetServiceDto](docs/PagedModelGetServiceDto.md)
 - [OpenApiDefinition.PatchReviewResponseDto](docs/PatchReviewResponseDto.md)
 - [OpenApiDefinition.PatchServiceCommand](docs/PatchServiceCommand.md)
 - [OpenApiDefinition.PatchServiceResponseDto](docs/PatchServiceResponseDto.md)
 - [OpenApiDefinition.PatchUserCommand](docs/PatchUserCommand.md)
 - [OpenApiDefinition.PatchUserResponseDto](docs/PatchUserResponseDto.md)
 - [OpenApiDefinition.PatchUserRoleCommand](docs/PatchUserRoleCommand.md)
 - [OpenApiDefinition.PatchUserStatusCommand](docs/PatchUserStatusCommand.md)
 - [OpenApiDefinition.RegisterUserCommand](docs/RegisterUserCommand.md)
 - [OpenApiDefinition.RegisterUserResponseDto](docs/RegisterUserResponseDto.md)
 - [OpenApiDefinition.SetUserPasswordCommand](docs/SetUserPasswordCommand.md)


## Documentation for Authorization

Endpoints do not require authorization.
