---
title: ABP.IO Open-Source Web Application Framework for Asp.Net Core
slug: ABP-IO-open-sourcce-web-application-frameworkds-for-asp-net-core
date: '2023-07-05'
excerpt: Complete Infrastructure to Create Modern Web and Mobile Applications
featuredImage:
  url: /images/ABP Framework.png
  altText: Thumbnail
  type: ImageBlock
  styles:
    self:
      borderRadius: medium
colors: bg-light-fg-dark
type: PostLayout
styles:
  self:
    flexDirection: col
    padding:
      - pl-2
      - pr-2
      - pt-2
      - pb-2
    borderWidth: 1
    borderRadius: x-small
isFeatured: true
---
## MULTIPLE UI OPTIONS

The core framework is designed as UI independent and can work with any type of UI system, while there are multiple pre-built and integrated options are provided out of the box.

*   Angular

*   ASPNet MVC

*   Blazor

## MULTIPLE DATABASE PROVIDERS

The framework can work with any data source, while the following providers are officially developed and supported;

*   Entity Framework

*   Mongo DB

*   Dapper

## MODULARITY

ABP provides a complete infrastructure to build your own application modules those may have entities, services, database integration, APIs, UI components and so on.

See the [module development document](https://docs.abp.io/en/abp/latest/Module-Development-Basics) for more information

## MULTI-TENANCY

ABP framework not only supports to develop multi-tenant applications, but also makes your code mostly unaware of the multi-tenancy.

Can automatically determine the current tenant, isolate data of different tenants from each other.

Supports single database, database per tenant and hybrid approaches.

You focus on your business code and let the framework to handle multi-tenancy on behalf of you.

See the [multi-tenancy document](https://docs.abp.io/en/abp/latest/Multi-Tenancy) for more information.

## DYNAMIC FORMS

Dynamic form & input tag helpers can create the complete form from a C# class as the model.

See the [dynamic forms document](https://docs.abp.io/en/abp/latest/AspNetCore/Tag-Helpers/Dynamic-Forms) for more information.

## VIRTUAL FILE SYSTEM

The Virtual File System makes it possible to manage files those do not physically exist on the file system (disk). It's mainly used to embed (js, css, image, cshtml...) files into assemblies and use them like physical files on runtime.

See the [virtual file system document](https://docs.abp.io/en/abp/latest/Virtual-File-System) for more information.

## THEMING

Theming system allows to develop your application & modules theme independent by defining a set of common base libraries and layouts, based on the latest Bootstrap framework.

See the [theming document](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Theming) for more information.

## BACKGROUND JOBS

Define simple classes to execute jobs in background as queued. Use built-in job manager or integrate your own. [Hangfire](https://docs.abp.io/en/abp/latest/Background-Jobs-Hangfire) & [RabbitMQ](https://docs.abp.io/en/abp/latest/Background-Jobs-RabbitMq) integrations are already available.

See the [background jobs document](https://docs.abp.io/en/abp/latest/Background-Jobs) for more information.

## DOMAIN DRIVEN DESIGN INFRASTRUCTURE

A complete infrastructure to build layered applications based on the Domain Driven Design patterns & principles;

*    [Aggregate Root, Entity](https://docs.abp.io/en/abp/latest/Entities)

*    [Value Object](https://docs.abp.io/en/abp/latest/Value-Objects)

*    [Domain Service](https://docs.abp.io/en/abp/latest/Domain-Services)

*    [Repository](https://docs.abp.io/en/abp/latest/Repositories)

*    [Application Service](https://docs.abp.io/en/abp/latest/Application-Services)

*    [Data Transfer Object](https://docs.abp.io/en/abp/latest/Data-Transfer-Objects)

*    [Specification](https://docs.abp.io/en/abp/latest/Specifications)

*   and more...

See the [domain driven design document](https://docs.abp.io/en/abp/latest/Domain-Driven-Design) for more information.

## AUTO REST APIS

ABP can automagically configure your application services as API Controllers by convention.

See the [auto API controllers document](https://docs.abp.io/en/abp/latest/API/Auto-API-Controllers) for more information.

## DYNAMIC CLIENT PROXIES

Easily consume your APIs from JavaScript and C# clients.

See the dynamic client proxy documentations for [JavaScript](https://docs.abp.io/en/abp/latest/UI/AspNetCore/Dynamic-JavaScript-Proxies) & [C#](https://docs.abp.io/en/abp/latest/API/Dynamic-CSharp-API-Clients).

## DISTRIBUTED EVENT BUS WITH RABBITMQ INTEGRATION

Easily publish & consume distributed events using built-in Distributed Event Bus with RabbitMQ integration available.

See the [distributed event bus document](https://docs.abp.io/en/abp/latest/Distributed-Event-Bus) for more information.

## BLOB STORING

BLOB Storing system provides an abstraction to work with BLOBs. ABP provides some pre-built storage provider integrations (Azure, AWS, File System, Database, etc.) that you can easily use in your applications.

See the [BLOB Storing document](https://docs.abp.io/en/abp/latest/Blob-Storing) for more information.

## TEXT TEMPLATING

Text templating is used to dynamically render contents based on a template and a model (a data object). For example, you can use it to create dynamic email contents with a pre-built template.

See the [Text Templating document](https://docs.abp.io/en/abp/latest/Text-Templating) for more information.

## TEST INFRASTRUCTURE

The framework has been developed unit & integration testing in mind. Provides you base classes to make it easier. Startup templates come with pre-configured for testing.

See the [testing document](https://docs.abp.io/en/abp/latest/Testing) for more information.

## AUDIT LOGGING & ENTITY HISTORIES

Built-in audit logging for business-critical applications. Request, service, method level audit logging and entity histories with property-level details.

See the [audit logging document](https://docs.abp.io/en/abp/latest/Audit-Logging) for more information.

## EMAIL & SMS ABSTRACTIONS WITH TEMPLATING SUPPORT

IEmailSender and ISmsSender abstractions decouples your application logic from the infrastructure. Advanced email template system allows to create & localize email templates and easily use whenever needed.

See the [emailing](https://docs.abp.io/en/abp/latest/Emailing) and [SMS sending](https://docs.abp.io/en/abp/latest/SMS-Sending) documents for more information.

## LOCALIZATION

Localization system allows to create resources in plain JSON files and use them to localize your UI. It supports advanced scenarios like inheritance, extensions and JavaScript integration while it is fully compatible with AspNet Core's localization system.

See the [localization document](https://docs.abp.io/en/abp/latest/Localization) for more information.

## SETTING MANAGEMENT

Define settings for your application and get values on runtime based on the current configuration, tenant and user.

See the [settings document](https://docs.abp.io/en/abp/latest/Settings) for more information.

## EXTENSION METHODS & HELPERS

Don't repeat yourself even for trivial code parts. Extensions & helpers for standard types makes your code much cleaner and easy to write.

See the [Extension methods & helpers document](https://docs.abp.io/en/abp/latest/Extension-Methods-And-Helpers) for more information.

## ASPECT ORIENTED PROGRAMMING

Provides a comfortable infrastructure to create dynamic proxies and implement Aspect Oriented Programming. Intercept any class and execute your code before & after every method execution.

See the [aspect oriented programming document](https://docs.abp.io/en/abp/latest/Aspect-Oriented-Programming) for more information.

## DEPENDENCY INJECTION BY CONVENTIONS

No need to register your classes to dependency injection manually. Automatically registers common service types by convention. For other type of services, you can use interfaces and attributes to make it easier and in-place.

See the [dependency injection document](https://docs.abp.io/en/abp/latest/Dependency-Injection) for more information.

## DATA FILTERING

Define and use data filters those are automatically applied when you query entities from database. Soft Delete & MultiTenant filters are provided out of the box when you implement simple interfaces.

See the [data filtering document](https://docs.abp.io/en/abp/latest/Data-Filtering) for more information.

Check out [ABP.IO ](https://abp.io/?utm_source=Decisiontree.tech\&utm_medium=partner-referral)website for more details.

Our team of ABP.IO developers is available for development engagements. [Contact us](https://share.hsforms.com/12nUNCOeLR-igOtKjGM1Yigcyb5j) for free consultation.



