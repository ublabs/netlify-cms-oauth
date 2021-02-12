# Netlify CMS on Vercel

![](https://banners.adrianub.vercel.app/Netlify%20CMS%20on%20Vercel.png?type=package&theme=dark&description=Use+Netlify+CMS+for+sites+hosted+on+Vercel&images=netlify&widths=250&heights=250&images=vercel&widths=250&heights=250&pattern=architect&md=1&showWatermark=1&fontSize=100px)

A simple OAuth2 serverless gateway for Netlify CMS written in TypeScript.

# Why do I need this?

If you would like to use Netlify CMS to manage your site deployed to Vercel.

[GitHub](https://github.com) and [Gitlab](https://gitlab.com) requires a server for authentication and Netlify provides this server only for sites deployed to it. Fortunately, such server is rather small and can work with Vercel's serverless functions.

# Usage

In yours projects modify `config.yml` file:

```yaml
backend:
  name: [github | gitlab]
  repo: adrian-ub/adrian-ub # Path to your Github/Gitlab repository
  branch: main # Branch to update
  base_url: https://netlify-cms.adrianub.vercel.app
```

## Authors

- Adrián UB ([@AdrianUB](https://twitter.com/AdrianUB))
