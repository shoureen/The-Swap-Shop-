The Swap Shop — Project Requirements
1. Project Overview

The Swap Shop is a campus-based online marketplace designed for students to buy, sell, and exchange items with other students.

The purpose of the application is to provide a convenient and affordable way for students to find items they need while allowing other students to sell or exchange items they no longer want.

The system will include a frontend web application, a backend REST API, and a relational database.

2. Project Goals

The main goals of The Swap Shop are to:

Create a simple campus marketplace for students.
Allow students to buy, sell, and exchange items.
Make it easy to create and manage item listings.
Allow students to search and filter available items.
Provide detailed information about each item.
Track how many times an item has been viewed.
Provide a transaction system for purchases and exchanges.
Provide a clear refund policy and refund request system.
Protect user account information.
Provide a user-friendly and responsive interface.
3. User Requirements
3.1 User Registration

Users should be able to create an account.

Users must provide:

Name
Email
Password

The system should:

Validate required information.
Prevent duplicate email addresses.
Securely store passwords.
Create a unique user account.
3.2 User Login

Users should be able to log into their account using their email and password.

The system should:

Verify the user's credentials.
Protect user account information.
Prevent unauthorized access to protected features.
3.3 User Profile

Users should be able to view and manage their profile.

The profile may include:

Name
Email
User's listings
Transaction history
Refund requests
4. Listing Requirements

Users should be able to create listings for items they want to sell or exchange.

Each listing should contain:

Item title
Item description
Price
Category
Condition
Image
Seller information
Listing status
Date created
Number of views
4.1 Listing Description

Every listing should allow the seller to provide a detailed description of the item.

Example:

Small dorm refrigerator in good condition. Used for one semester and works properly.

The description should help potential buyers understand the item's condition and important details.

4.2 Create Listing

Users should be able to:

Enter an item title.
Enter an item description.
Enter a price.
Select a category.
Select the item's condition.
Upload or provide an item image.
Publish the listing.
4.3 Edit Listing

The seller should be able to update their listing.

They should be able to change:

Title
Description
Price
Category
Condition
Image
Listing status
4.4 Delete Listing

The seller should be able to remove a listing they created.

The system should verify that the user has permission to remove the listing.

5. Search and Filtering Requirements

Users should be able to search for items.

The system should support searching by:

Item name
Description
Category

Users should also be able to filter listings by:

Category
Price
Condition
Listing status
6. Item View Counter

The system should track how many times each listing has been viewed.

Each listing should have a view count.

Example:

Mini Refrigerator
$50
37 views

When a user opens a listing, the system should increase the listing's view count.

The view count should be stored in the database.

7. Transaction Requirements

The system should support transactions between users.

Transactions may include:

Purchases
Item exchanges

A transaction should store information such as:

Buyer
Seller
Listing
Transaction type
Price
Transaction status
Date created
Date completed

Possible transaction statuses include:

Pending
Completed
Cancelled
Refunded
8. Refund Requirements

The application should provide a clear refund policy.

Users should be able to request a refund for eligible transactions.

The refund system should allow:

Creating a refund request.
Viewing a refund request.
Viewing refund status.
Approving a refund.
Denying a refund.
Completing an approved refund.

Possible refund statuses include:

Requested
Approved
Denied
Completed

The refund policy should be clearly displayed to users before they submit a refund request.

9. User Interface Requirements

The frontend should provide an easy-to-use interface.

The application should include pages or sections for:

Home
Marketplace
Listing details
Create listing
Edit listing
User profile
Login
Registration
Transactions
Refund policy
Refund requests

The interface should be responsive and usable on different screen sizes.

10. Backend Requirements

The backend should be developed using Spring Boot and Java.

The backend should provide REST APIs for:

Users
Listings
Search
Transactions
Refunds
View counts

The backend should:

Validate user input.
Handle errors.
Enforce user permissions.
Communicate with the database.
Return appropriate responses to the frontend.
11. Database Requirements

The application should use PostgreSQL as its relational database.

The database should store information about:

Users
Listings
Transactions
Refunds

The database should maintain relationships between users, listings, and transactions.

The database should also store the view count for each listing.

12. Security Requirements

The application should protect user information.

Security requirements include:

Passwords must not be stored as plain text.
User input should be validated.
Users should only be allowed to modify their own listings.
Users should only be allowed to access information they are authorized to access.
Sensitive database credentials should not be committed to GitHub.
13. Performance Requirements

The application should respond to normal user actions within a reasonable amount of time.

The system should be designed so that it can support additional users and listings in the future.

Search and listing retrieval should remain efficient as the database grows.

14. Error Handling Requirements

The system should provide appropriate error responses when something goes wrong.

Examples include:

Invalid login information
Missing required fields
Listing does not exist
User does not have permission
Transaction does not exist
Refund does not exist
Invalid refund request

Errors should be handled without exposing sensitive system information.

15. GitHub and Collaboration Requirements

The project will use Git and GitHub for version control.

The team will use separate branches for development.

Person 1

Responsible primarily for:

Backend
Database
REST APIs
Transactions
Refund system
View counter
Person 2

Responsible primarily for:

Frontend
React interface
User experience
Marketplace pages
Listing interface
Search/filter interface

Both team members will participate in:

Testing
Debugging
Integration
Documentation
Final presentation
16. Technology Requirements

The project will use:

Frontend
React
Vite
HTML
CSS
JavaScript
Backend
Java
Spring Boot
Spring Data JPA
Spring Security
Maven
Database
PostgreSQL
pgAdmin
Development and Collaboration
Visual Studio Code
Git
GitHub
17. Future Requirements

Future versions of The Swap Shop may include:

Mobile application
Push notifications
Featured listings
Messaging between buyers and sellers
Rating and review system
University-specific marketplaces
Improved image storage
Cloud deployment
Edge processing and caching
Additional payment options
18. Success Criteria

The project will be considered successful when users can:

Create an account.
Log into the application.
Create a listing.
Add a detailed item description.
View available listings.
Search and filter listings.
View an item's details.
See the item's view count.
Purchase or exchange an item.
View transaction information.
Read the refund policy.
Submit a refund request.
View the status of a refund.
Use the application through a functional and responsive interface.

The backend, frontend, and database should work together as one functioning application.