# Urban Mobility Explorer

A public-facing interactive explorer for summary statistics from a multi-city urban mobility survey conducted in 2021.

This repository contains a lightweight static site designed to make selected survey findings accessible through a clear, transparent, and downloadable public interface. The explorer is built for fast loading, simple interpretation, and careful expansion over time.

## Project overview

The Urban Mobility Explorer presents selected descriptive findings from the **Mobility, Temporality, and Africa’s Future Politics (MTAFP)** project.

The public release focuses on neighbourhood- and city-level patterns across three African cities:

- **Nairobi**: Kawangware, Kayole, Ongata Rongai
- **Accra**: Jamestown, Old Fadama, Madina
- **Johannesburg**: Berea, Diepsloot, Katlehong

The explorer is intended for:

- public-facing research communication
- exploratory descriptive analysis
- teaching and demonstration
- lightweight reuse by other researchers

It is not intended to serve as a full analytical platform or a nationally representative survey archive.

## What this repository contains

The repository includes:

- a minimal static interactive explorer
- a public summary dataset used by the explorer
- an anonymised reduced public microdata file
- documentation for interpretation and reuse

## Public data release

The current public release includes:

- selected summary variables on belonging, outsider status, trust, and mobility expectations
- a demographic extension including:
  - age group
  - gender
  - migrant status
  - education group
  - employment status

These demographic variables are presented in collapsed public-safe categories for clarity and disclosure protection.

## Cities and neighbourhoods included

The public explorer includes neighbourhood-level data from three cities.

**Accra**

- Jamestown
- Old Fadama
- Madina

**Nairobi**

- Kawangware
- Kayole
- Ongata Rongai

**Johannesburg**

- Berea
- Diepsloot
- Katlehong

## Repository structure

```text
urban-mobility-explorer/
│
├── site/
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── app.js
│   ├── data/
│   │   ├── survey_public_summary_v1.csv
│   │   ├── survey_public_summary_v2.csv
│   │   ├── survey_public_microdata_v1.csv
│   │   └── survey_public_microdata_v2.csv
│
├── docs/
│   ├── codebook.md
│   ├── methods.md
│   └── questionnaire_clean.md
│
├── scripts/
│   └── 01_inspect_data.ipynb
│
├── data_raw/
├── data_clean/
└── questionnaire.txt
```

## Data notes

Fieldwork took place in March-April 2021

Total sample: 1,644 respondents

All respondents were 18 years or older

Sampling was quota-based

The public data release is anonymised and reduced

The data are suitable for descriptive and exploratory use

The sample is not nationally representative

## Explorer logic

The explorer uses a long-format public summary file with the following core fields:

geography_level

city

neighbourhood

variable

category

n

share

The site currently supports:

city-level summaries

neighbourhood-level summaries

## Downloads and documentation

The explorer provides access to:

anonymised reduced public microdata

a public codebook

a methods note

a cleaned public questionnaire extract

## Citation

Mobility, Temporality, and Africa’s Future Politics (2021).
Urban Mobility Explorer – Public Data Release v1.1.

## Status

This is a minimal public release. The repository is designed to be:

transparent

lightweight

expandable

Future work may extend the explorer with additional variables, improved filtering, and richer metadata.
