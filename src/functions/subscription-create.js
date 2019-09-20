const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * Create a subscription
 */

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 410,
      body: 'Unsupported Request Method'
    };
  }

  // get the payload
  // const payload = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello world' })
  };

  // try {
  //   const response = await axios.get('https://icanhazdadjoke.com', {
  //     headers: { Accept: 'application/json' }
  //   });
  //   const data = response.data;

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ msg: data.joke })
  //   };
  // } catch (err) {
  //   console.log(err); // output to netlify function log

  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
  //   };
  // }
}
