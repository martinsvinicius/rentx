import { stat, unlink } from 'fs/promises';

export const deleteByFilename = async (filename: string) => {
  try {
    await stat(filename);
  } catch (error) {
    return;
  }

  await unlink(filename);
};
