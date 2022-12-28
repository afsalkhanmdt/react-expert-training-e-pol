import Election from "../Schema/Election";

export const createElection = async (election: any) => {
  const result = await Election.create(election);
  return result;
};
export const updateElection = async (id: any, election: any) => {
  const result = await Election.findByIdAndUpdate(id, election);
  return result;
};

export const getElectionByCollege = async (college: any) => {
  const result = await Election.find({ college }).populate("college").populate("positions.candidates.student");
  return result;
};
