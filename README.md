# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Vendor

### Role-Based Access Control (RBAC)

#### RBAC Configuration File
- **Location:** `RBAC.js`
  
#### Configuration Details:
- **Initial Role:**
  - Determines the initial role assigned to users.
  - Configured in the `initialRole` variable.
  
- **Roles:**
  - Define different roles and their corresponding permissions.
  - Specified in the `roles` object.
  
- **Related Access:**
  - Specifies the permissions granted to each role.
  - Determines which features and functionalities users with each role can access.



## Role-Based Access Control (RBAC)

#### RBAC Configuration File
- **Location:** `RBAC.js`
  
#### Configuration Details:
- **Initial Role:**
  - Determines the initial role assigned to users.
  - Configured in the `initialRole` variable.
  
- **Roles:**
  - Define different roles and their corresponding permissions.
  - Specified in the `roles` object.
  
- **Related Access:**
  - Specifies the permissions granted to each role.
  - Determines which features and functionalities users with each role can access.




## New Design Form Guide

#### File Details:
- **Location:** `src\components\newDesignAddition\NewDesignPage.jsx`

#### Form Inputs:
- **Fields:**
  - ID
  - Name
  - Stock Count
  - Brand
  - Image Upload
  - Model Textures Upload
  - Presets CSV Upload
  - Description
  - AR Integration Checkbox
  - Expectation Description

#### Form Submission:
- **Validation:**
  - Mandatory fields: ID, Name, Stock Count, Image Upload
  - Error messages displayed if fields are missing or invalid.

- **File Handling:**
  - Image, Model Textures, and Presets CSV files are uploaded.
  - Files are saved with unique names in the uploads folder.
  - File URLs are logged for reference.

- **Form Data:**
  - Object with all form data, including file names and addresses, is logged.

#### Additional Notes:
- TODO: Implement form validation logic.
- TODO: Implement function to save files to uploads folder.

