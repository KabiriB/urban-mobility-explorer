# Urban Mobility Explorer

## Public Data Codebook

Version 1.1

This document describes the structure and meaning of variables included in the public summary dataset (`survey_public_summary_v2.csv`) and the anonymised microdata release (`survey_public_microdata_v2.csv`).

The data originate from the **Mobility, Temporality, and Africa’s Future Politics (MTAFP)** project, collected between March and April 2021 in:

- Nairobi (Kawangware, Kayole, Ongata Rongai)
- Accra (Jamestown, Old Fadama, Madina)
- Johannesburg (Berea, Diepsloot, Katlehong)

Total sample: **1,644 respondents**

All respondents were **18 years or older**. Sampling was **quota-based**, balancing gender and migrant status within selected neighbourhoods.

The dataset is designed for **comparative urban research on belonging, governance perceptions, and mobility expectations** in African cities.

---

# 1. Geographic Variables

### `geography_level`

Level of aggregation for summary statistics.

Values:

- `city`
- `neighbourhood`

---

### `city`

City where the interview took place.

Values:

- `Nairobi`
- `Accra`
- `Johannesburg`

---

### `neighbourhood`

Neighbourhood where the respondent was interviewed.

Nairobi:

- `Kawangware`
- `Kayole`
- `Ongata Rongai`

Accra:

- `Jamestown`
- `Old Fadama`
- `Madina`

Johannesburg:

- `Berea`
- `Diepsloot`
- `Katlehong`

---

# 2. Identity and Belonging Variables

### `belong_here`

Indicates whether the respondent reports feeling that they belong in their current neighbourhood.

Values:

- `Yes`
- `No`
- `Missing`

---

### `perceived_outsider`

Indicates whether the respondent reports that others treat them as an outsider in the neighbourhood.

Values:

- `Yes`
- `No`
- `Don't know`
- `Missing`

---

# 3. Trust and Institutional Perceptions

### `trust_police`

Trust in the local police.

Values:

- `Trust`
- `Do not trust`
- `Missing`

---

### `trust_councillor`

Trust in the elected local councillor or equivalent political representative.

Values:

- `Trust`
- `Do not trust`
- `Missing`

---

### `trust_religious_leaders`

Trust in religious leaders.

Values:

- `Trust`
- `Do not trust`
- `Missing`

---

# 4. Mobility and Future Orientation

### `plan_move_2yrs`

Indicates whether the respondent expects to move residence within the next two years.

Values:

- `Yes`
- `No`
- `Unsure`
- `Missing`

---

### `retire_location`

Likely place where the respondent expects to live in the long term or retire.

Values:

- `Current city`
- `Place of origin`
- `Another country`
- `Unsure`
- `Missing`

---

# 5. Demographic Variables (Phase B Expansion)

Version 1.1 of the public data release adds a small set of demographic descriptors to support exploratory analysis across neighbourhoods and cities.

These variables are **collapsed categories derived from the original questionnaire**. Categories are simplified to ensure stable neighbourhood-level estimates and to reduce disclosure risk.

---

### `age_group`

Age category of the respondent.

Derived from **Year of Birth (Survey Question 104)** and calculated relative to the **2021 survey year**.

Age calculation:

Values:

- `18-24`
- `25-34`
- `35-44`
- `45-54`
- `55+`
- `Missing`

Respondents with missing or invalid year of birth are coded as `Missing`.

---

### `gender`

Self-reported gender of respondent.

Derived from **Survey Question 4 (Gender)**.

Values:

- `Male`
- `Female`
- `Other / Missing`

Rare responses and unspecified answers are collapsed into `Other / Missing`.

---

### `migrant_status`

Indicates whether the respondent is classified as a migrant relative to the survey city.

Derived from **Survey Question 3 (Migrant status)**.

Values:

- `Migrant`
- `Non-migrant`
- `Missing`

---

### `education_group`

Highest level of education attained.

Derived from **Survey Question 111 (Education)**.

Collapsed categories:

- `No formal schooling`
- `Primary`
- `Secondary`
- `Tertiary`
- `Missing`

These categories summarise a more detailed set of education responses recorded in the full questionnaire.

---

### `employment_status`

Broad employment situation at the time of interview.

Derived from **Survey Question 303 (Current Employment Status)**.

Collapsed public categories:

- `Employed`
- `Unemployed`
- `Student`
- `Missing`

The original survey recorded a wider set of labour categories including informal work and casual employment. These are grouped into broader categories for the public dataset.

---

# 6. Summary Dataset Structure

The summary dataset (`survey_public_summary_v2.csv`) is structured in long format.

| Column          | Description                         |
| --------------- | ----------------------------------- |
| geography_level | city or neighbourhood               |
| city            | city name                           |
| neighbourhood   | neighbourhood name                  |
| variable        | variable name                       |
| category        | response category                   |
| n               | number of respondents               |
| denominator     | total respondents in that geography |
| share           | proportion of respondents           |

Percentages are calculated within the selected geography and variable.

---

# 7. Notes on Public Release

- This dataset is anonymised.
- No direct identifiers are included.
- Microdata are reduced to protect respondent confidentiality.
- Sampling was quota-based and purposive at neighbourhood level.
- The dataset is suitable for **descriptive and exploratory analysis**.
- The sample is **not nationally representative**.

---

# Citation

Mobility, Temporality, and Africa’s Future Politics (2021).  
Urban Mobility Explorer – Public Data Release v1.1.
