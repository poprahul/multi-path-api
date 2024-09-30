# Multi-Path API with AWS SAM

This project demonstrates how to create a serverless API with multiple paths using AWS Serverless Application Model (SAM) and a single Lambda function.

## Project Structure
```
.
├─ src/
│ └─ app.js
├─ template.yaml
├─ samconfig.toml
└─ README.md
```

- **`src/app.js`**: Contains the Lambda function code.
- **`template.yaml`**: SAM template defining the application's AWS resources.
- **`samconfig.toml`**: Configuration file for SAM CLI.

## Prerequisites

- [AWS CLI configured with appropriate credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- [AWS SAM CLI installed](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- [Node.js 20.x installed](https://nodejs.org/)

## Setup and Deployment

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
    ```

2. Build the application:
    ```bash
    sam build
    ```

3. Deploy the application:
    ```bash
    sam deploy --guided
    ```
Follow the prompts to configure your deployment.

## API Endpoints
After deployment, you'll have access to the following endpoints:
```
GET /path1
POST /path2
PUT /path3
```

## Local Testing
1. Start the local API:
```
sam local start-api
```

2. Use curl or a tool like Postman to send requests:
```
curl http://localhost:3000/path1
curl -X POST http://localhost:3000/path2
curl -X PUT http://localhost:3000/path3
```

## Cleanup
To remove the application and all associated resources from AWS:
```
sam delete
```
