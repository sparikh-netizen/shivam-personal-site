# Shivam Parikh Personal Site

Code-first personal website for Shivam Parikh.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This repo is configured for GitHub Pages via `.github/workflows/deploy.yml`.

Custom domain:

```text
shivamparikh.me
```

DNS should be managed wherever the domain is hosted. If the domain stays on Wix, point Wix DNS records to GitHub Pages.

## Wix DNS For GitHub Pages

In Wix DNS settings for `shivamparikh.me`, use:

```text
@      A      185.199.108.153
@      A      185.199.109.153
@      A      185.199.110.153
@      A      185.199.111.153
www    CNAME  sparikh-netizen.github.io
```

Then in GitHub repository settings:

```text
Settings -> Pages -> Source: GitHub Actions
Custom domain: shivamparikh.me
```

GitHub Pages on a free plan requires this repository to be public.
