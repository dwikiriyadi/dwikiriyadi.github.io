"use client";
import { useEffect, useMemo, useState } from "react";
import type { ArticleItem } from "@/types/article";

// Simple client-side fetcher for Medium RSS via rss2json
// Replace MEDIUM_USERNAME with your Medium handle
const MEDIUM_USERNAME = process.env.NEXT_PUBLIC_MEDIUM_USERNAME || "wikinotes";
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
  const [raw, setRaw] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  // Reset to first page whenever pageSize changes to keep indexes valid
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    async function fetchRss() {
      setLoading(true);
      setError(undefined);
      try {
        const rssUrl = encodeURIComponent(
          `https://medium.com/feed/@${MEDIUM_USERNAME}`,
        );
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`,
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setRaw(Array.isArray(data.items) ? data.items : []);
      } catch (e: any) {
        setError(e?.message || "Failed to load articles");
      } finally {
        setLoading(false);
      }
    }
    fetchRss();
  }, []);

  const articles: ArticleItem[] = useMemo(() => {
    return raw.map((it) => ({
      id: it.guid || it.link,
      title: it.title,
      link: it.link,
      pubDate: new Date(it.pubDate).toISOString(),
      excerpt:
        (it.description || "").replace(/<[^>]+>/g, "").slice(0, 180) + "…",
    }));
  }, [raw]);

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
    loading,
    error,
  };
}
