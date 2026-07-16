# Cloud-Native Task Manager API

Production-ready Node.js and Express task manager API with PostgreSQL, Prisma, JWT authentication, validation, Swagger docs, Docker, AWS EC2 deployment, Nginx, Terraform, and Kubernetes.

## Features

- User registration and login with JWT authentication
- Protected CRUD for tasks
- Task priorities, status, due dates, search, filtering, sorting, and pagination
- Centralized validation and error handling
- Logging and health checks with live and ready probes
- Swagger/OpenAPI documentation

## Local Setup

1. Install dependencies.

```bash
npm install
```

2. Copy the environment template and update the values.

```bash
cp .env.example .env
```

3. Generate the Prisma client.

```bash
npm run prisma:generate
```

4. Run the database migration after PostgreSQL is available.

```bash
npm run prisma:migrate
```

5. Start the API.

```bash
npm run dev
```

The API runs on `http://localhost:3000` and Swagger UI is available at `http://localhost:3000/api-docs` when enabled.

## Testing

Run the full test suite with:

```bash
npm test -- --runInBand
```

Run linting with:

```bash
npm run lint
```

## Docker

Build and run the stack locally with PostgreSQL:

```bash
docker compose up --build
```

The Compose stack exposes the API on port `3000` and PostgreSQL on port `5432`.

## Health Checks

- Liveness: `/api/v1/health/live`
- Readiness: `/api/v1/health/ready`
- General health alias: `/api/v1/health`

## API Routes

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/tasks`
- `POST /api/v1/tasks`
- `GET /api/v1/tasks/:taskId`
- `PATCH /api/v1/tasks/:taskId`
- `DELETE /api/v1/tasks/:taskId`

## Deployment Assets

- Docker and Docker Compose: root `Dockerfile` and `docker-compose.yml`
- EC2 provisioning: `terraform/`
- Nginx reverse proxy and HTTPS: `nginx/` and `scripts/setup-ssl.sh`
- CI/CD: `.github/workflows/ci-cd.yml`
- Kubernetes manifests: `k8s/`

## Environment Variables

Required runtime values are documented in `.env.example`
"# Cloud-AWS-task-manager-API" 
