---
title: "Marketplace Platform for your Startup Idea"
description: "Build a Marketplace Startup. Exchange messages, transactions for business. Buy or rent the product."
keywords:
  - marketplace
  - platform
  - marketplace platform
  - multi vendor platform
  - marketplace software
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/marketplace.png
  # cta_label: "Enquire"
  # cta_url: "mailto:sandesh.soni@songpoem.com&subject=enquiry&body=Wehomepage"
  excerpt: "We reuse already developed and well tested Modules and Functionalities, that can be imported rather than building from scratch and testing again."
permalink: /platform/marketplace/
implementation_options:
  - title: "Connected"
    description: "The Core drives back-end. The frontend, cart, search, checkout functionality are all carried out by same server engine."
  - title: "Headless"
    description: "Develop a Bespoke marketplace site using our marketplace and connect through core APIs or GraphQL"
feature_row:
  - title: "Dashboard"
    description: "Admin or Seller dashboard to see a summary of performance. Recent highlights of new users or products."
  - title: "Ordering Website"
    description: "Web portal that can be opened from browser on laptop or mobile."
    image_path: /assets/images/icons/mobile-tablet-monitor.png
  - title: "Customer App"
    description: "Customer App"
    image_path: /assets/images/icons/mobile.png
  - title: "Vendor App"
    description: "For a Seller side"
    image_path: /assets/images/icons/mobile.png
modules_row:
  - title: "Dashboard"
    description: "Performance dashboards displaying stats and providing metadata for further analytics."
  - title: "Communication"
    description: "Notifications, Chat Messages, Interaction with User"
  - title: "Integrations"
    description: "Payment Integration, Slack, and other API integration"
  - title: "Gamification"
    description: "designed for Gamification, Reward points"
---

### Marketplace Platform.

Types of Marketplaces
- eCommerce. Multiple Buyers and Sellers list their products.
- Travel. explore places.
- Seat Booking. Event or a seat in Bus travelling to destination.
- Rental Marketplace

Modules we have pre-built
- Shopper
- Seller
- Authentication
- Authorization
- Users
- Products or Services
- Checkout
- Cart
- Email Notifications
- Push Notifications
- Marketing Analytics
- Reports

Supported features
- Caching
- Cron jobs
- Job Processer
- Message Queue

Business features
- Advetisements
- Importing list of products by CSV

{% include feature_row_wide title="What you get" %}

{% include feature_row_wide id="modules_row" title="Features we support" %}

{% include feature_row_wide id="implementation_options" title="Implementation Options" %}

{% include cta_section description="Want to build a Marketplace? Book a free 30 minutes consultation call" %}


## Related Blogs.
{% for post in site.categories["Marketplace"] %}
  <a href="{{post.url}}">{{ post.title }}</a>
{% endfor %}
