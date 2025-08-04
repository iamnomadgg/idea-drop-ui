import type { IdeaType } from '@/types';
import api from '@/lib/axios';

export const fetchIdeas = async (): Promise<IdeaType[]> => {
  const res = await api.get(`/ideas`);
  return res.data;
};

export const fetchIdea = async (ideaId: string): Promise<IdeaType> => {
  const res = await api.get(`/ideas/${ideaId}`);
  return res.data;
};
