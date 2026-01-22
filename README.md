# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 🔥 Strapi Cloud Warmup (Cold Start Mitigation)

This project includes a GitHub Actions workflow to mitigate cold start issues on Strapi Cloud (Free tier) by periodically warming up the instance.

### How It Works

- **Health Endpoint**: A lightweight `/api/health` endpoint is implemented that returns `{ "status": "ok" }` without any database queries
- **Automated Warmup**: GitHub Actions runs every 10 minutes to call the health endpoint
- **Public Endpoint**: The health endpoint is public (no authentication required) for simplicity and security

### Setup Instructions

1. **Set Repository Variable**:
   - Go to your GitHub repository
   - Navigate to: **Settings** > **Secrets and variables** > **Actions** > **Variables** tab
   - Click **New repository variable**
   - Name: `STRAPI_WARMUP_URL`
   - Value: Your Strapi Cloud URL (e.g., `https://your-project.strapi.app`)
   - Click **Add variable**

2. **Verify Health Endpoint**:
   - After deploying, test the health endpoint:
   ```bash
   curl https://your-project.strapi.app/api/health
   ```
   - Expected response: `{"status":"ok"}`

3. **Test the Workflow**:
   - Go to **Actions** tab in your GitHub repository
   - Select **Strapi Warmup** workflow
   - Click **Run workflow** to manually trigger it
   - Check the logs to verify it's working correctly

### Workflow Details

- **Schedule**: Runs every 10 minutes (cron: `*/10 * * * *`)
- **Manual Trigger**: Available via `workflow_dispatch` in the Actions tab
- **Timeout**: 20 seconds per request
- **User-Agent**: `GitHub-Actions-Strapi-Warmup/1.0` (for identifying warmup traffic)

### Security Note

The `/api/health` endpoint is intentionally public (no authentication) because:
- It only returns a simple status response
- It performs no database queries or sensitive operations
- It's designed to be lightweight and fast
- Public access simplifies the warmup process

If your security policy requires authentication, you can:
1. Modify `src/index.ts` to remove `auth: false` from the health endpoint
2. Uncomment the token-based authentication sections in `.github/workflows/strapi-warmup.yml`
3. Add `STRAPI_API_TOKEN` as a GitHub Secret (Settings > Secrets and variables > Actions > Secrets)

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
