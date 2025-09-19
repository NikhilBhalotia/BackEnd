import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content:"this is joke number 1"
    },
    {
      id: 2,
      title: "joke 2",
      content:"this is joke number 2"
    },
    {
      id: 3,
      title: "joke 3",
      content:"this is joke number 3"
    },
    {
      id: 4,
      title: "joke 4",
      content:"this is joke number 4"
    },
    {
      id: 5,
      title: "joke 5",
      content:"this is joke number 5"
    },

  ];
  res.send(jokes);
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
  
})