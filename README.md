# Jiajun Wang - Personal Homepage

Bilingual academic homepage for Jiajun Wang (王家骏), a PhD student at Université de Lorraine, Institut Élie Cartan de Lorraine (IECL).

Live site: https://kazusa000.github.io/

## Content

- Current doctoral research: backstepping transformations, feedback design, and numerical methods.
- Earlier research in Stokes shape optimization, signal estimation, low-rank recovery, and parameter identification.
- Journal articles, a manuscript, and a conference paper with category filters.
- Research experience, education, open-source software, and music interests.
- English / Chinese switching and an updated two-page English CV.

The diagrams are conceptual illustrations, not numerical experiment results.

## Preview

This is a static, dependency-free site. Serve the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. JavaScript adds language switching and publication filters; all English content and links remain available without it.

## Main files

- `index.html`: bilingual content; English is the default.
- `styles.css`: desktop, mobile, print, and reduced-motion styles.
- `script.js`: language preference and publication filters.
- `assets/`: original vector illustrations and site identity assets.
- `resume.tex` / `resume.pdf`: downloadable CV and its source.

## Publish

GitHub Pages serves `main` from the repository root. Push the verified commit to `main` to update the existing site. No build system or hosting migration is needed.

## Update the CV

```sh
latexmk -norc -xelatex -interaction=nonstopmode -halt-on-error resume.tex
```

The historical résumé template files remain under their original license.
