import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 文章在 ISR 重算時從 content/ 讀，要一起打包進 function */
  outputFileTracingIncludes: {
    "/*": ["./content/writing/**/*"],
  },
};

export default nextConfig;
