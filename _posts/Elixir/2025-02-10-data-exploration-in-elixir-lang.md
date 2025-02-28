---
title: fast Data Exploration in Elixir
author: Sandesh Soni
category: Elixir
breadcrumbs: true
published: true
read_time: false
tags:
- dplyr
- one-dimension
- two-dimension
- elixir
- data-exploration
- artificial-intelligence
---

While learning about Embeddings in ML, I realised the need of Data Explorer.
Our Team is adding AI developmnet skills.

Data can be one dimension or two Dimension
- series for one dimension
- dataframes for two dimension

Examples

### One Dimension

```
fruits = Explorer.Series.from_list(["apple", "mango", "banana", "orange"])
```
```
#Explorer.Series<
  Polars[4]
  string ["apple", "mango", "banana", "orange"]
>
```

### Two Dimension

```
mountains = Explorer.DataFrame.new(name: ["Everest", "K2", "Aconcagua"], elevation: [8848, 8611, 6962])
```
```
#Explorer.DataFrame<
  Polars[3 x 2]
  name string ["Everest", "K2", "Aconcagua"]
  elevation s64 [8848, 8611, 6962]
>
```

We will update with better examples.


references
- [Explorer documentation](https://hexdocs.pm/explorer/Explorer.html){:target="_blank"}
- [Dplyr](https://dplyr.tidyverse.org/){:target="_blank"}
- [Dplyr cheatsheet](https://dplyr.tidyverse.org/#cheat-sheet){:target="_blank"}
