# Share-Link

## Table of Contents

1. [Project Overview](#project-overview)
2. [Libraries and Frameworks Used](#libraries-and-frameworks-used)
3. [Setup Instructions](#setup-instructions)
4. [Development Server](#development-server)

## Project Overview

Share-Link is a web application that allows users to log in, create a profile with name, email, and picture, add social media links, and share the profile publicly.

## Libraries and Frameworks Used

| **Library/Framework**   | **Version** | **Description**                                                         |
| ----------------------- | ----------- | ----------------------------------------------------------------------- |
| **Next.js**             | 14.2.15     | React framework for building server-side rendered applications.         |
| **React**               | 18          | JavaScript library for building user interfaces.                        |
| **NextAuth**            | 4.24.8      | Authentication for Next.js applications, supporting multiple providers. |
| **Zod**                 | 3.23.8      | TypeScript-first schema validation with great developer experience.     |
| **Tailwind CSS**        | 3.4.1       | Utility-first CSS framework for styling.                                |
| **React Beautiful DnD** | 13.1.1      | Drag and drop functionality for React.                                  |
| **clsx**                | 2.1.1       | Utility for constructing `className` strings conditionally.             |
| **MongoDB**             | 6.9.0       | NoSQL database used for storing user and link information.              |
| **React Icons**         | 5.3.0       | Popular icons library for React applications.                           |

### Development Dependencies

| **Development Tool**            | **Version** | **Description**                                                            |
| ------------------------------- | ----------- | -------------------------------------------------------------------------- |
| **ESLint**                      | 8           | Code linter for identifying and fixing problematic patterns in JavaScript. |
| **Prettier**                    | 3.3.3       | Code formatter to enforce consistent style.                                |
| **Prettier Plugin TailwindCSS** | 0.6.8       | Plugin to format Tailwind CSS classes within Prettier.                     |
| **TypeScript**                  | 5           | Superset of JavaScript that adds static types.                             |

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/share-link.git
    cd share-link
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory, similar to the following structure:

    ```bash
    MONGODB_DB_NAME=share_link                # Name of the MongoDB database
    MONGODB_USERNAME=<your-mongodb-username>  # MongoDB username
    MONGODB_PASSWORD=<your-mongodb-password>  # MongoDB password
    MONGODB_URI=mongodb+srv://$MONGODB_USERNAME:$MONGODB_PASSWORD@<your-cluster-url>/$MONGODB_DB_NAME?retryWrites=true&w=majority&appName=Cluster0  # MongoDB connection URI

    NEXTAUTH_URL=http://localhost:3000/       # The URL of the Next.js application
    NEXTAUTH_SECRET=<your-nextauth-secret>    # Secret key for NextAuth authentication

    GOOGLE_CLIENT_ID=<your-google-client-id>         # Google OAuth Client ID
    GOOGLE_CLIENT_SECRET=<your-google-client-secret> # Google OAuth Client Secret

    GITHUB_CLIENT_ID=<your-github-client-id>         # GitHub OAuth Client ID
    GITHUB_CLIENT_SECRET=<your-github-client-secret> # GitHub OAuth Client Secret
    ```

    or you can take environment variables from here https://drive.google.com/file/d/1U-6Fyo2kvfRykfISBSV8Jv8NdssnGKoL/view?usp=sharing

## Development Server

To start the development server:

1. Ensure your `.env` file is properly set up.
2. Run the following command to start the server:
    ```bash
    npm run dev
    ```
    This will start the development server at http://localhost:3000.

#### Hey 👋! As you are now wrapped up, you can checkout the live demo of this project. https://share-link-ecru.vercel.app ✅

#### And don't forget to checkout my profile https://share-link-ecru.vercel.app/preview/102926770508308469066
