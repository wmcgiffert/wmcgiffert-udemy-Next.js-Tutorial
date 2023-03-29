// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function Handler(req, res) {
  const currentDate = new Date(Date.now());
  const workers = {
    messsage: 'Last updated: ' + currentDate,
    workers:[
      { name: 'Jay' },
      { name: 'Surendra' },
      { name: 'Madhu' },
      { name: 'Garrett McGiffert' },
    ]
  }
  console.log(workers)
  res.status(200).json(workers);
}
