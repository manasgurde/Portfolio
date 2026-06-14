import { create } from 'zustand';

interface AppState {
  activeChapter: number;
  setActiveChapter: (chapterIndex: number) => void;
  scrollProgress: number; // 0 to 1
  setScrollProgress: (progress: number) => void;
}

export const useStore = create<AppState>((set) => ({
  activeChapter: 0,
  setActiveChapter: (chapterIndex) => set({ activeChapter: chapterIndex }),
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
