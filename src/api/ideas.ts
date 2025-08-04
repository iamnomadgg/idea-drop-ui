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

export const createIdea = async (newIdea: {
  title: string;
  summary: string;
  description: string;
  tags: string[];
}): Promise<IdeaType> => {
  const res = await api.post('/ideas', {
    ...newIdea,
    createdAt: new Date().toISOString(),
  });
  return res.data;
};
