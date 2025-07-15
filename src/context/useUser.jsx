import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUser = create(
  persist(
    (set, get) => ({
      user: null,
      access: (data = {}) => set({ user: data }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUser;
