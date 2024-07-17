
---

# Portfolio Site

## Overview

This project is a personal portfolio website designed to showcase what all services provided by us and how to contact us also breifly explained about us.

## Prerequisites

- Salesforce CLI v2
- A Salesforce Developer Org

## Installation

### Clone the Repository

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Vikram-8465/Portfolio-Site.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Portfolio-Site
    ```

### Deploy to Salesforce

1. **Authorize your Salesforce org and provide it with an alias (e.g., myOrgAlias):**
    ```bash
    sf login org --instanceurl https://login.salesforce.com --setdefaultusername --setalias myOrgAlias
    ```

2. **Deploy the project to your Salesforce org:**
    ```bash
    sf project deploy start --source-dir force-app
    ```

3. **Open the org to see the Portfolio Site:**
    ```bash
    sf org open
    ```

## Usage

1. **Access the Portfolio Site** from the App Launcher in your Salesforce org.
2. **Explore the portfolio sections** showcasing skills, projects, and contact information.

---
