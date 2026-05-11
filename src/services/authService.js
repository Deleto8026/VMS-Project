const API_BASE_URL = "http://localhost:8080/api/auth";

export async function loginUser(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login request failed:", error);
    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}

export async function logoutUser() {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Logout failed");
    }

    return data;
  } catch (error) {
    console.error("Logout request failed:", error);
    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}
//dima - sign up method
export async function signupUser(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Signup request failed:", error);
    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}

//dima - verifies user's 6-digit code during sign up
export async function verifyUser(email, code) {
  try {
    const response = await fetch(`${API_BASE_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, code }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Verification request failed:", error);
    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}