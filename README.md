# UK Top HeadLines

## To Run 

- $ npm install 
- $ npm start

Following url you can access it

- Client URL : http://localhost:3000/
- Server URL : http://localhost:3001/

### Restriction

Our Application connected to NewsAPI URl to get the latest news.

In our development, we used only top-headlines. (Search also restrict in Top headlines)

Everything in NewsAPI will return all the country results.

If you want to change to all country news.

Change the path in follwoing file.

**const baseUrl = process.env.REACT_APP_API_URL+"/headlines";** 

 to

**const baseUrl = process.env.REACT_APP_API_URL+"/everything";**


