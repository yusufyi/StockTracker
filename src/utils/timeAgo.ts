// src/utils/timeAgo.ts

export const timeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const differenceInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (const interval in intervals) {
        const value = Math.floor(differenceInSeconds / intervals[interval]);
        if (value >= 1) {
            return `${value} ${interval}${value > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
};
