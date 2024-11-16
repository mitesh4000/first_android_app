import { create } from "zustand";

interface BearState {
  authToken: string | null; // Use null to indicate no token
  bears: number;
  setToken: (token: string) => void;
  increase: (by: number) => void;
  clearToken: () => void; // Function to clear the token
  userIsLoggedIn: () => boolean;
}

const useBearStore = create<BearState>()((set, get) => ({
  bears: 0,
  authToken: "somthing",
  setToken: (token) => set({ authToken: token }),
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  clearToken: () => set({ authToken: null }), // Clear the token
  userIsLoggedIn: () => {
    const state = get(); // Get the current state
    return !!state.authToken; // Return true if authToken exists, false otherwise
  },
}));

export default useBearStore;
