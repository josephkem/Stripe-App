const stripeAPI = require("./stripe");

const createCheckoutSession = async (req, res) => {
  const domainUrl = process.env.WEB_APP_URL;
  const { line_items, customer_email } = req.body;

  //check req body has line items and email addresses
  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: "missing required session paramaters" });
  }

  let session;

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "paymenr",
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ["GB", "US"] },
    });
    res.status(200).json({ sessionID: session.id });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "An error occurred, unable to create session" });
  }
};

module.exports = createCheckoutSession;
