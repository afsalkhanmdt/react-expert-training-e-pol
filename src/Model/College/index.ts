import College from "../Schema/College";

export const createCollege = async (college: any) => {
  const result = await College.create(college);
  return result;
};
export const getColleges = async () => {
  const result = await College.find();
  return result;
};

export const addBatch = async (id: any, batch: any) => {
  const result = await College.findByIdAndUpdate(
    id,
    {
      $push: { batches: batch },
    },
    { new: true }
  );

  return result;
};
export const removeBatch = async (id: any, batch: any) => {
  const result = await College.findByIdAndUpdate(id, {
    $pull: { batches: batch },
  });
  return result;
};

export const addPosition = async (id: any, position: any) => {
  console.log(position);

  const result = await College.findByIdAndUpdate(
    id,
    {
      $push: { positions: position },
    },
    { new: true }
  );
  return result;
};
export const removePosition = async (id: any, position: any) => {
  const result = await College.findByIdAndUpdate(id, {
    $pull: { positions: position },
  });
  return result;
};
