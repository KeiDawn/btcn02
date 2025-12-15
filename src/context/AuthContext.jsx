import { createContext, useContext, useEffect, useState } from "react";
import { loginApi } from "@/services/auth.service";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
    loading: true,
  });

  useEffect(() => {
    const user = localStorage.getItem("user_info");
    const token = localStorage.getItem("user_token");

    if (user && token) {
      setAuth({
        user: JSON.parse(user),
        token,
        loading: false,
      });
    } else {
      setAuth((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  const login = async (data) => {
    const res = await loginApi(data);

    localStorage.setItem("user_info", JSON.stringify(res.user));
    localStorage.setItem("user_token", res.token);

    setAuth({
      user: res.user,
      token: res.token,
      loading: false,
    });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({
      user: null,
      token: null,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        token: auth.token,
        loading: auth.loading,
        isAuthenticated: !!auth.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
