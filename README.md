# Cloud-Native Task Manager API

Production-ready Node.js and Express API for task management with PostgreSQL, Prisma, JWT authentication, validation, Swagger/OpenAPI, Docker, AWS deployment assets, Terraform, and Kubernetes manifests.

## Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Express Validator
- dotenv
- Jest
- Docker and Docker Compose
- Nginx
- AWS EC2
- GitHub Actions
- Terraform
- Kubernetes

## Features

- User registration and login
- JWT-protected routes
- Role-based authorization ready for extension
- CRUD for tasks
- Task categories
- Task priorities
- Task status
- Due dates
- Search, filtering, sorting, and pagination
- Input validation
- Centralized error handling
- Structured logging
- Health checks
- Swagger/OpenAPI documentation
- Readiness and liveness probes

## Project Structure

- `src/controllers` - HTTP controllers
- `src/routes` - API routes
- `src/services` - business logic
- `src/middleware` - auth, error, and validation middleware
- `src/config` - environment, database, logger, Swagger config
- `src/models` - Prisma client wrapper
- `src/utils` - shared helpers
- `src/validators` - request validation rules
- `prisma` - schema and migrations
- `scripts` - setup and deployment scripts
- `tests` - unit and integration tests
- `docker-compose.yml` - local app and PostgreSQL stack
- `terraform` - AWS EC2 infrastructure
- `nginx` - reverse proxy config
- `k8s` - Kubernetes manifests

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL 16+
- Docker and Docker Compose

## Environment Variables

Copy the example file and set the values:

```bash
cp .env.example .env
```

Required variables:

- `PORT`
- `NODE_ENV`
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `CORS_ORIGIN`
- `LOG_LEVEL`
- `SWAGGER_ENABLED`

## Local Setup

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

API base URL:

```bash
http://localhost:3000
```

Swagger UI:

```bash
http://localhost:3000/api-docs
```

## NPM Scripts

- `npm run dev` - start the API with nodemon
- `npm start` - start the API in production mode
- `npm run lint` - run ESLint
- `npm test` - run Jest tests
- `npm run test:watch` - run Jest in watch mode
- `npm run prisma:generate` - generate Prisma client
- `npm run prisma:migrate` - run Prisma migrations locally
- `npm run prisma:studio` - open Prisma Studio

## Testing

Run all tests:

```bash
npm test -- --runInBand
```

Run linting:

```bash
npm run lint
```

## Docker

Build and start the full stack:

```bash
docker compose up --build
```

The Compose stack exposes:

- API: `http://localhost:3000`
- PostgreSQL: `localhost:5432`

## Health Checks

- Liveness: `GET /api/v1/health/live`
- Readiness: `GET /api/v1/health/ready`
- General health alias: `GET /api/v1/health`

## API Routes

### Auth

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`

### Tasks

- `GET /api/v1/tasks`
- `POST /api/v1/tasks`
- `GET /api/v1/tasks/:taskId`
- `PATCH /api/v1/tasks/:taskId`
- `DELETE /api/v1/tasks/:taskId`

### Health

- `GET /api/v1/health`
- `GET /api/v1/health/live`
- `GET /api/v1/health/ready`

## Deployment Assets

- `Dockerfile` - production container image
- `docker-compose.yml` - local application and PostgreSQL stack
- `nginx/nginx.conf` - reverse proxy and HTTPS termination
- `scripts/setup.sh` - local bootstrap script
- `scripts/deploy.sh` - container deployment script
- `scripts/setup-ssl.sh` - Let's Encrypt setup
- `scripts/renew-ssl.sh` - certificate renewal
- `.github/workflows/ci-cd.yml` - CI/CD pipeline
- `terraform/` - AWS EC2 infrastructure
- `k8s/` - Kubernetes deployment manifests

## AWS Deployment Flow

1. Provision EC2 with Terraform.
2. Install Docker, Nginx, and the application stack.
3. Configure the reverse proxy.
4. Issue and renew TLS certificates with Let's Encrypt.
5. Deploy through GitHub Actions or `scripts/deploy.sh`.

## Notes

- Prisma schema lives in `prisma/schema.prisma`.
- Environment values should be stored outside the repository.
- Kubernetes secrets must be created from secure secret storage before applying manifests.
