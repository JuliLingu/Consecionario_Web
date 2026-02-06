import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Al cargar la app, verificamos si hay token guardado
  useEffect(() => {
    const tokenGuardado = localStorage.getItem("token_concesionario");
    if (tokenGuardado) {
      setToken(tokenGuardado);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string) => {
    // --- SIMULACIÓN DE BACKEND ---
    // Creamos un payload falso como si fuera un JWT real
    const payload = {
      sub: "1234567890",
      name: "Admin Dueño",
      email: email,
      role: "admin",
      iat: Date.now(),
    };

    // Convertimos a Base64 para que parezca un token real (eyJ...)
    const fakeJwtToken = btoa(JSON.stringify(payload));

    localStorage.setItem("token_concesionario", fakeJwtToken);
    setToken(fakeJwtToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token_concesionario");
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto en cualquier componente
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
}
