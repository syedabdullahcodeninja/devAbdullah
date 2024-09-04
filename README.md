# Project Setup Guide

This guide will walk you through setting up a Node.js project with TypeScript and Express.js.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js (LTS version)**
- **npm** (comes with Node.js)

## Setup Instructions

1. **Install Node.js LTS Version**

   Download and install the latest LTS version of Node.js from the official website: https://nodejs.org/

2. **Initialize a New Node.js Project**

   Create a new directory for your project and navigate into it. Then, initialize a new Node.js project:

   `mkdir my-project && cd my-project && npm init -y`

   This will create a `package.json` file with default settings.

3. **Set Up TypeScript in the Project**

   Install TypeScript and the necessary types for Node.js:

   `npm install typescript ts-node @types/node --save-dev`

   Initialize a TypeScript configuration file:

   `npx tsc --init`

   This will generate a `tsconfig.json` file in your project directory.

4. **Install Express.js as a Dependency**

   Install Express.js and the necessary type definitions:

   `npm install express && npm install @types/express --save-dev`
