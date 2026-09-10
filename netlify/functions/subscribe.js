export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({
          message: "Please enter a valid email.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const listId = Number(process.env.BREVO_LIST_ID);

    console.log("Email:", email);
    console.log("List ID:", listId);
    console.log("API key exists:", Boolean(process.env.BREVO_API_KEY));

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const text = await response.text();

    console.log("Brevo status:", response.status);
    console.log("Brevo response:", text);

    let data = {};

    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          status: response.status,
          message: data.message || text || "Brevo request failed",
          brevo: data,
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed!",
        brevo: data,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Function error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Server error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
