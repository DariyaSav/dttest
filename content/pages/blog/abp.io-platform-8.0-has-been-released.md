---
type: PostLayout
title: ABP.IO Platform 8.0 Has Been Released
date: '2024-09-05'
excerpt: >-
  Discover the latest features in ABP Framework v8.0, including support for .NET
  8, Angular 17, Dynamic Claims, and enhanced repository options. Learn about
  new security enhancements like LDAPS and performance boosts through CDN
  integration. Read more about how these updates simplify and improve enterprise
  application development.
featuredImage:
  type: ImageBlock
  url: /images/ABP v8.png
  altText: ABP.IO Platform 8.0 Has Been Released
  styles:
    self:
      borderRadius: medium
bottomSections:
  - type: RecentPostsSection
    title:
      type: TitleBlock
      text: Recent posts
      color: text-dark
      styles:
        self:
          textAlign: center
    recentCount: 3
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    hoverEffect: thin-underline
    styles:
      self:
        justifyContent: center
slug: ABP.IO Platform 8.0 Has Been Released
isFeatured: true
seo:
  type: Seo
  metaTitle: ABP.IO Platform 8.0 Has Been Released
  metaDescription: >-
    Discover the latest features in ABP Framework v8.0, including support for
    .NET 8, Angular 17, Dynamic Claims, and enhanced repository options. Learn
    about new security enhancements like LDAPS and performance boosts through
    CDN integration. Read more about how these updates simplify and improve
    enterprise application development.
  socialImage: /images/ABP v8.png
  metaTags: []
  addTitleSuffix: true
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
    padding:
      - pl-2
      - pr-2
      - pt-1
      - pb-2
    borderWidth: 1
    borderRadius: x-small
author: content/data/decision-tree-technology.json
---
Volosoft has released version 8 of [ABP Framework](https://abp.io/) and [ABP Commercial](https://commercial.abp.io/).

This major release includes the following additions:

Here’s a quick list of updates introduced in ABP Framework v8.0:

These updates bring better performance, improved security, and ease of use across various features of the ABP framework.

For further details, you can refer to the [official blog post](https://abp.io/blog/announcing-abp-8-0-release-candidate).

<!---->

*   **Upgrade to .NET 8.0** – ABP has been upgraded to support .NET 8.0, which requires existing solutions to migrate to this version of the .NET platform.

*   **Angular 17 Integration** – The Angular UI template now supports Angular 17, bringing in the latest improvements from the Angular ecosystem.

*   **Dynamic Claims** – This new feature allows the dynamic generation of user claims on each request, ensuring up-to-date claim information without requiring a user to re-login.

*   **CDN Support for Bundling & Minification** – CDN support is added to the bundling and minification system for MVC/Razor Pages, optimizing the handling of external resources.

*   **Read-Only Repositories** – New read-only repository interfaces have been added for data querying without change tracking, boosting performance for certain operations.

*   **Username After Social Login** – The user registration process with external/social logins has been improved, allowing users to set a username immediately, avoiding email exposure as usernames.

*   **LDAPS Support** – Secure LDAP over SSL (LDAPS) has been introduced, enhancing security for directory integrations.

Our team already had a chance to work on this release with Blazor UI, Angular 17 and Lepton X with some of our clients. If you are considering an upgrade and have doubts feel free to have a quick chat with one of our experts.

[Book a FREE call now!](https://lp.decisiontree.tech/meetings/yulia-diamond)
