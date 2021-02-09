type Exercise = {
    id: string;
    category: string;
    name: string;
    description?: string
    history: ExerciseHistoryEntry[];
  }

  type ExerciseHistoryEntry = {
      date: number;
      sets: ExerciseSet[];
      comment: string;
  }

  type ExerciseSet = {
      comment: string;
      reps: number;
      weight: number;
  }