import axios from 'axios';

interface Course {
    id: string;
    name: string;
    air_date: string;
    status: "In Progress" | "Completed";
}

export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await axios.get<Course[]>('https://finalspaceapi.com/api/v0/episode/');
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  }
};
