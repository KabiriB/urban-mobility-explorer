# Urban Mobility Explorer

A comparative urban data resource for exploring mobility, belonging, trust, and future orientation across selected neighbourhoods in Accra, Nairobi, and Johannesburg.

This repository contains the public data release and interactive explorer for the **Mobility, Temporality, and Africa’s Future Politics** survey project.

The survey was conducted in 2021 across nine urban neighbourhoods in three African cities, with 1,644 adult respondents.

---

## Live Explorer

The public-facing explorer is available through GitHub Pages:

**Urban Mobility Explorer**  
https://kabirib.github.io/urban-mobility-explorer/

---

## Project Overview

The Urban Mobility Explorer presents selected descriptive findings from a comparative urban survey conducted in:

### Accra, Ghana

- Jamestown
- Old Fadama
- Madina

### Nairobi, Kenya

- Kawangware
- Kayole
- Ongata Rongai

### Johannesburg, South Africa

- Berea
- Diepsloot
- Katlehong

The explorer focuses on patterns related to:

- mobility histories and future movement expectations
- belonging and perceived outsider status
- trust in local institutions
- demographic structure
- neighbourhood and city-level variation

The repository is designed to support:

- public-facing research communication
- exploratory descriptive analysis
- teaching and classroom use
- comparative urban research
- transparent secondary analysis

The project is not intended to function as a nationally representative survey archive.

---

## Repository Structure

```text
urban-mobility-explorer/
│
├── index.html
├── README.md
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
│
├── data/
│   ├── raw_data.csv
│   ├── survey_public_microdata_v2.csv
│   └── survey_public_summary_v2.csv
│
├── docs/
│   ├── codebook.md
│   ├── methods.md
│   ├── questionnaire_clean.md
│   └── questionnaire.txt
│
└── scripts/
    ├── 01_inspect_data.ipynb
    └── 02_check_demographics.ipynb
```
