import { create } from "zustand";
import { persist } from "zustand/middleware";

const userHistory = create(
  persist(
    (set) => ({
      history: [],

      addHistory: (topicName, correctCount, incorrectCount) =>
        set((state) => ({
          history: [
            ...state.history,
            { topicName, correctCount, incorrectCount, timestamp: new Date() },
          ],
        })),

      clearHistory: () =>
        set(() => ({
          history: [],
        })),
    }),
    {
      name: "quiz-history-storage",
    }
  )
);

export default userHistory;
