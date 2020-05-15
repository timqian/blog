# My personal blog

## Deploy

```bash
# install dependencies
npm i

# generate blog
node index.js --baseURL "https://timqian.com/blog" --title "timqian" --fromPath "posts" --destPath "docs" --themePath "themes/timqian.com"
```

## Params

- `--baseURL`: base url of your blog
- `--title`: title of your blog
- `--fromPath`: the folder path where you store blog posts
- `--destPath`: where you want to store the blogs
- `--themePath`: the folder path where theme is stored
