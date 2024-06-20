export interface Stock {
    symbol: string;
    name: string;
}

export interface StockResult {
    v: number;
    vw: number;
    o: number;
    c: number;
    h: number;
    l: number;
    t: number;
    n: number;
}
export interface StockData {
    ticker: string;
    queryCount: number;
    resultsCount: number;
    adjusted: boolean;
    results: StockResult[];
    status: string;
    request_id: string;
    count: number;
}

  // src/interfaces/StockData.ts

export interface StockDataDaily {
    status: string;
    from: string;
    symbol: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    afterHours: number;
    preMarket: number;
}


// src/interfaces/NewsArticle.ts

export interface Publisher {
    name: string;
    homepage_url: string;
    logo_url: string;
    favicon_url: string;
}

export interface NewsArticle {
    id: string;
    publisher: Publisher;
    title: string;
    author: string;
    published_utc: string;
    article_url: string;
    tickers: string[];
    amp_url: string;
    image_url: string;
    description: string;
    keywords: string[];
}

export interface NewsApiResponse {
    results: NewsArticle[];
}
