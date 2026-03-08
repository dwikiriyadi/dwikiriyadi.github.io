"use client";
import { useEffect, useMemo, useState } from "react";
import type { ArticleItem } from "@/types/article";
import type { MediumRssItem, MediumRssResponse } from "@/types/medium";
import { ARTICLES } from "@/data/articles";

// Simple client-side fetcher for Medium RSS via rss2json
// Username is read from data config first, then env var as fallback
const ENV_MEDIUM_USERNAME = process.env.NEXT_PUBLIC_MEDIUM_USERNAME;
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

function toMediumItem(item: ArticleItem): MediumRssItem {
  return {
    title: item.title,
    pubDate: item.pubDate,
    link: item.link,
    guid: item.id,
    author: "",
    thumbnail: "",
    description: item.excerpt,
    content: item.excerpt,
    categories: [],
  };
}

export function useMediumArticles(pageSize?: number): UseMediumArticlesResult {
  const [raw, setRaw] = useState<MediumRssItem[]>([]);
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
      const fallbackItems = ARTICLES.fallbackItems || [];

      if (ARTICLES.provider === "static") {
        setRaw(fallbackItems.map(toMediumItem));
        setLoading(false);
        return;
      }

      try {
        const rss = ARTICLES.rssUrl
          ? ARTICLES.rssUrl
          : ARTICLES.mediumUsername || ENV_MEDIUM_USERNAME
          ? `https://medium.com/feed/@${ARTICLES.mediumUsername || ENV_MEDIUM_USERNAME}`
          : undefined;
        if (!rss) {
          throw new Error("Medium username is not configured. Set it in src/data/articles.ts or NEXT_PUBLIC_MEDIUM_USERNAME.");
        }
        const rssUrl = encodeURIComponent(rss);
        const rss2jsonRes = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);

        if (rss2jsonRes.ok) {
          const data: MediumRssResponse & { message?: string } = await rss2jsonRes.json();
          if (data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
            setRaw(data.items);
            return;
          }
          if (data.status === "error" && data.message) {
            throw new Error(data.message);
          }
        }

        throw new Error(rss2jsonRes.ok ? "Invalid Medium RSS response." : `HTTP ${rss2jsonRes.status}`);
      } catch (e) {
        if (fallbackItems.length > 0) {
          setRaw(fallbackItems.map(toMediumItem));
          setError(undefined);
        } else {
          setError(e instanceof Error ? e.message : "Failed to load articles");
        }
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
