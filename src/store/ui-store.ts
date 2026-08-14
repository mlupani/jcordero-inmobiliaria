import { create } from 'zustand'

interface UIState {
  mobileMenuOpen: boolean
  valuationOpen: boolean
  filtersOpen: boolean
  chatOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  setValuationOpen: (open: boolean) => void
  setFiltersOpen: (open: boolean) => void
  setChatOpen: (open: boolean) => void
}

export const useUIStore = create<UIState>()((set) => ({
  mobileMenuOpen: false,
  valuationOpen: false,
  filtersOpen: false,
  chatOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setValuationOpen: (open) => set({ valuationOpen: open }),
  setFiltersOpen: (open) => set({ filtersOpen: open }),
  setChatOpen: (open) => set({ chatOpen: open })
}))
