const apiKeys = process.env.REACT_APP_API_KEY;

export const fetchStockData = async (stock: string) => {
    //beging date six months ago format will be 2024-05-01

    const tod = new Date(); 
    tod.setMonth(tod.getMonth() - 6);
    const sixMonthsAgo = tod.toISOString().split('T')[0];
    console.log(sixMonthsAgo);

    // and date today format will be 2024-06-14
    const today = new Date();
    const date = today.toISOString().split('T')[0];
    console.log(date);

    try  {
        const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/${sixMonthsAgo}/${date}?adjusted=true&sort=asc&apiKey=${apiKeys}`);
    if (!response.ok) {
        throw new Error("Failed to fetch stock data");
    }
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Failed to fetch stock data', error);
    return [];
}
};