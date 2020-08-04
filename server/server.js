const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c12a5d11821748feacfa8caafe37f63c');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

app.use(cors());

app.get('/', (req, res) => {
    res.send('UK top News Server');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

const resJson = [{ "source": { "id": null, "name": "CBS Sports" }, "author": null, "title": "2020 PGA Championship odds, picks: Tiger Woods predictions from proven model that nailed six majors - CBS Sports", "description": "SportsLine simulated the 2020 PGA Championship 10,000 times and came up with a surprising leaderboard.", "url": "https://www.cbssports.com/golf/news/2020-pga-championship-odds-picks-tiger-woods-predictions-from-proven-model-that-nailed-six-majors/", "urlToImage": "https://sportshub.cbsistatic.com/i/r/2019/02/23/3a0bc3c9-d3a1-4c04-867c-7c94706f6b1b/thumbnail/1200x675/b4a7b10aefdfd7f3f7b4eec1a3a472d5/tiger.jpg", "publishedAt": "2020-08-04T03:10:00Z", "content": "Justin Thomas made history at the WGC-FedEx St. Jude Invitational over the weekend, claiming his 13th PGA Tour title in convincing fashion. Thomas trailed leader Brendon Todd by four strokes entering… [+8489 chars]" }]


app.get('/headlines', async function (req, res) {
    try {
        let reqObj = { country: 'gb' }
        req.query.searchQuery ? reqObj.q = req.query.searchQuery : delete reqObj.q
        let data = await newsapi.v2.topHeadlines(reqObj);
        data.status == "ok" ? res.send(data.articles) : res.send([]);
    } catch (e) {
        res.send([]);
    }
});

app.get('/everything', async function (req, res) {
    try {
        let reqObj = {}
        req.query.searchQuery ? reqObj.q = req.query.searchQuery : delete reqObj.q
        let data = await newsapi.v2.everything(reqObj);
        res.send(data);
    } catch (e) {
        res.send(e);
    }
});