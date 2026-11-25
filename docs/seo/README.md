# SEO／AEO 健檢工具

- `seo_audit.py <網址>`：讀 sitemap 逐頁檢查 title／description 長度、canonical、OG、hreflang、JSON-LD、麵包屑、H1、圖片 alt。
  例：`python3 docs/seo/seo_audit.py https://ciaohua.genesis131.com`（或本機 `npx next start -p 3123` 後用 http://localhost:3123）
- `check_en.py`：檢查 content/writing/en/ 的英文翻譯（frontmatter、日期對原文、破折號、站內連結、結尾註記、殘留中文），最後列出還沒翻的已發佈文章。需要 PyYAML。

預期會出現、不用修的：/companion、/rotation、/tools 系列沒有英文版所以沒有 hreflang；首頁背景圖 alt 刻意留空。
