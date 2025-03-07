import { create } from 'zustand';

interface IProps {
    activeTab: string;
    setActiveTab: (newText: string) => void;
}

const useTabActive = create<IProps>((set) => ({
    activeTab: 'monthly',
    setActiveTab: (active) => set({ activeTab: active }),
}));
  
export default useTabActive;
