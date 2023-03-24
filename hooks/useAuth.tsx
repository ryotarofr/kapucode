"use client";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
// import { useRouter } from 'next/router'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { auth } from "../firebase/client";

interface IAuth {
  error: string | null;
  loading: boolean;
  logout: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  user: User | null;
}

const AuthContext = createContext<IAuth>({
  error: null,
  loading: false,
  logout: async () => {},
  signIn: async () => {},
  signInWithGithub: async () => {},
  signInWithGoogle: async () => {},
  signUp: async () => {},
  user: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Logged in...
        setUser(user);
        setLoading(false);
      } else {
        // Not logged in...
        setUser(null);
        setLoading(true);
        // router.push('/login')
        router.push("/login");
      }

      setInitialLoading(false);
    }),
  );

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const signInWithGithub = async () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
        console.log(provider);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };
  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({ error, loading, logout, signIn, signInWithGithub, signInWithGoogle, signUp, user }),
    [user, loading, error],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{!initialLoading && children}</AuthContext.Provider>
  );
};

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context comopnent.
export default function useAuth() {
  return useContext(AuthContext);
}
