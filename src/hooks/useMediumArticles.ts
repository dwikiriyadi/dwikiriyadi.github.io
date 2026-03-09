"use client";
import { useEffect, useMemo, useState } from "react";
import type { ArticleItem } from "@/types/article";
import { ARTICLES } from "@/data/articles";

// default page size; can be overridden by hook consumer based on device
const DEFAULT_PAGE_SIZE = 3; // fixed per request

interface UseMediumArticlesResult {
  items: ArticleItem[];
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  next: () => void;
  prev: () => void;
  loading: boolean;
  error?: string;
}

export function useMediumArticles(pageSize?: number): UseMediumArticlesResult {
  const [page, setPage] = useState<number>(1);

  // Reset to first page whenever pageSize changes to keep indexes valid
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const articles: ArticleItem[] = useMemo(() => {
    return (ARTICLES.fallbackItems || []).map((item) => ({
      ...item,
      pubDate: new Date(item.pubDate).toISOString(),
    }));
  }, []);

  const size = Math.max(1, pageSize || DEFAULT_PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(articles.length / size));
  const start = (page - 1) * size;
  const pageItems = articles.slice(start, start + size);

  return {
    items: pageItems,
    page,
    hasPrev: page > 1,
    hasNext: page < totalPages,
    next: () => setPage((p) => Math.min(totalPages, p + 1)),
    prev: () => setPage((p) => Math.max(1, p - 1)),
    loading: false,
    error: undefined,
  };
}
