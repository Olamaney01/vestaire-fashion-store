const subscribe = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/.netlify/functions/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const text = await response.text();

    let data = {};

    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }
    }

    if (!response.ok) {
      alert(data.message || "Something went wrong. Please try again.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  } catch (error) {
    console.error(error);
    alert(error.message || "Something went wrong. Please try again.");
  }
};
