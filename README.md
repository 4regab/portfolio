# Personal portfolio

Built with [Next.js 15](https://nextjs.org) (App Router) and [Once UI](https://once-ui.com).

Live: [4regab.dev](https://4regab.dev)

## Tech Stack

- Framework: Next.js 15 (App Router)
- UI: Once UI, SCSS Modules
- Content: MDX via next-mdx-remote
- Language: TypeScript
- Node: v20+

## Getting Started

```bash
corepack enable
pnpm install
pnpm dev
```

To create a production build:

```bash
pnpm build
```

### Configuration

| File | Purpose |
| --- | --- |
| `src/resources/once-ui.config.ts` | Theme, fonts, routes, display settings |
| `src/resources/content.tsx` | Bio, social links, page content |
| `src/app/projects/projects/*.mdx` | Project write-ups |
| `.env` | Environment variables (see `.env.example`) |

### Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `PAGE_ACCESS_PASSWORD` | Optional | Password for protected routes |

## Deployment

This project is a standard Next.js app. Deploy it to any platform that supports Next.js, or run it directly with:

```bash
pnpm build
pnpm start
```

### Elastic Beanstalk

This repository is set up to deploy to AWS Elastic Beanstalk from GitHub Actions using a pre-built Next.js standalone bundle.

Local packaging command:

```bash
pnpm build:eb
```

This creates a deployment-ready bundle in `build/elastic-beanstalk-bundle/`. The GitHub deployment workflow zips that folder and uploads it as the Elastic Beanstalk source bundle.

Required GitHub repository variables:

- `AWS_REGION`
- `EB_APPLICATION_NAME`
- `EB_ENVIRONMENT_NAME`

Required GitHub repository secret:

- `AWS_ROLE_TO_ASSUME`

Optional GitHub repository variables for first-time environment creation:

- `EB_PLATFORM_ARN`
- `EB_INSTANCE_PROFILE`
- `EB_SERVICE_ROLE`

If `EB_PLATFORM_ARN`, `EB_INSTANCE_PROFILE`, and `EB_SERVICE_ROLE` are set, the deployment workflow can create the Elastic Beanstalk environment if it does not exist yet. Otherwise, it deploys only to an existing environment.

Recommended Elastic Beanstalk platform:

- Node.js 20 on 64bit Amazon Linux 2023

### CI/CD

Two GitHub Actions workflows are included:

- `.github/workflows/ci.yml`: installs dependencies, lints, and builds on pull requests and pushes to `main`
- `.github/workflows/deploy-elastic-beanstalk.yml`: builds a standalone deployment artifact and deploys it to Elastic Beanstalk on pushes to `main` or manual dispatch

## Project Structure

```text
src/
|-- app/                  # Next.js App Router pages and API routes
|   |-- api/              # Authentication, OG image, RSS endpoints
|   |-- projects/         # Project listing and detail pages
|   `-- layout.tsx        # Root layout
|-- components/           # Reusable UI components
|-- resources/            # Configuration and content definitions
|-- types/                # TypeScript type definitions
`-- utils/                # Utility functions
```

## Attribution

Built on [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) by [Lorant One](https://www.linkedin.com/in/lorant-one/) and the Once UI team.

- [Once UI Documentation](https://docs.once-ui.com/docs/magic-portfolio/quick-start)
- [Design Engineers Club on Discord](https://discord.com/invite/5EyAQ4eNdS)

## License

Distributed under the **CC BY-NC 4.0** License. See `LICENSE` for more information.
