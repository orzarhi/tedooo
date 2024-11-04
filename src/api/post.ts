import { Post } from '@/types';

const BASE_URL = 'https://backend.tedooo.com';

export const getPosts = async (pageParam: number) => {
  try {
    const response = await fetch(`${BASE_URL}/hw/feed.json?skip=${pageParam}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return {
      data: data.data as Post[],
      hasMore: data.hasMore as boolean,
    };
  } catch (error) {
    console.error('There was an error:', error);
  }
};

export const logImpression = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/?itemId=${id}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching impression:', error);
  }
};
