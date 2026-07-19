# Wang Jiajun — Academic Homepage

Source code for my academic homepage: **https://kazusa000.github.io**

I am a master's student in Mathematics and Applications at Université Paris-Saclay. My interests include numerical analysis, partial differential equations, optimization, finite element methods, and scientific computing.

## Local preview

The site is static and has no build dependencies. From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a public repository named `kazusa000.github.io` under the GitHub account `kazusa000`.
2. Push this directory to the repository's `main` branch.
3. In **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Visit <https://kazusa000.github.io> after GitHub finishes the deployment.

## Main files

- `index.html` — page content
- `styles.css` — visual design and responsive layout
- `avatar.jpg` — profile image
- `resume.pdf` — downloadable curriculum vitae
- `resume.tex` — LaTeX source for the curriculum vitae

## Updating the CV

Compile only the main CV with:

```bash
latexmk -xelatex resume.tex
```

The original LaTeX résumé template was adapted from [billryan/resume](https://github.com/billryan/resume) and remains subject to its license.
