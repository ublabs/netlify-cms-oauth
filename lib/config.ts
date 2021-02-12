export const config = (provider: string) => ({
  client: {
    id: client[provider].id,
    secret: client[provider].secret,
  },
  auth: {
    tokenHost: auth[provider].tokenHost,
    tokenPath: auth[provider].tokenPath,
    authorizePath: auth[provider].authorizePath,
  },
});

const auth = {
  github: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
  gitlab: {
    tokenHost: "https://gitlab.com",
    tokenPath: "/oauth/token",
    authorizePath: "/oauth/authorize",
  },
};

const client = {
  github: {
    id: process.env.OAUTH_GITHUB_CLIENT_ID,
    secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
  },
  gitlab: {
    id: process.env.OAUTH_GITLAB_CLIENT_ID,
    secret: process.env.OAUTH_GITLAB_CLIENT_SECRET,
  },
};
