import React, { useEffect, useState } from "react";
import { fetchStockNews } from "../api/api";
import { NewsArticle } from "../types";
import { timeAgo } from "../utils/timeAgo";
export const StockNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchStockNews(10);
        setNews(newsData.results);
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="text-center text-2xl font-bold">Stock Market News</div>

      <div className="grid md:grid-cols-2 ">
        {news.map((article) => (
          <div className="p-4">
            <a
              href={article.article_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-1  my-5 hover:bg-slate-200 cursor-pointer ">
                <div className="flex-1">
                  <div className="flex">
                    <img
                      src={article.publisher.logo_url}
                      alt={article.publisher.name}
                      className=" h-6 object-fill"
                    />

                    <span className="text-xs ml-2 text-gray-500 flex items-end">
                      {timeAgo(article.published_utc)}
                    </span>
                  </div>
                  <p className=" font-bold  ">{article.title}</p>
                </div>
                <div className="">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className=" rounded-xl w-24 h-24 object-fill"
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
