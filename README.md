# HackSoc Website

![Github Actions](https://img.shields.io/github/workflow/status/HacksocNotts/HacksocNotts.github.io/github%20pages?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues/hacksocnotts/hacksocnotts.co.uk.svg?style=for-the-badge) ![GitHub pull requests](https://img.shields.io/github/issues-pr/hacksocnotts/hacksocnotts.co.uk.svg?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/hacksocnotts/hacksocnotts.co.uk.svg?style=for-the-badge)

The current website for HackSoc at the University of Nottingham.

## How it's made
The HackSoc website core dependencies are:
 * [Hugo](https://gohugo.io)
 * [Github Pages](https://pages.github.com)

## Contributing
Contributions are welcome for both updating our Calendar and improving the website. However, please see the [Contributors Guide](./CONTRIBUTING.md) first.

## Run locally
1. Clone the repository `git clone https://github.com/HackSocNotts/hacksocnotts.co.uk.git`
2. Install hugo [this guide may help](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)
3. Start development server `hugo server --disableFastRender`because there are some annoying things that can happen during dev if run with just `hugo server`

### Caveats and things to note:
  * You may have to restart the server when you make a new event for it to show up in the calendar
