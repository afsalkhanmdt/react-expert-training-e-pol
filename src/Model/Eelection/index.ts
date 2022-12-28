import Election from "../Schema/Election";

export const createElection = async (election: any) => {
  const result = await Election.create(election);
  return result;
};
export const updateElection = async (id: any, election: any) => {
  const result = await Election.findByIdAndUpdate(id, election, {
    upsert: true,
    new: true,
  });
  return result;
};

export const getElectionByCollege = async (college: any) => {
  const result = await Election.find({ college })
    .populate("college")
    .populate("positions.candidates.student");
  return result.map((data: any) => ({
    ...data._doc,
    positions: data.positions.map((d: any) => ({
      ...d._doc,
      position: data._doc.college.positions.find(
        ({ _id }: any) => _id.str === d._doc.position.str
      ),
    })),
  }));
};
export const getElectionById = async (id: any) => {
  const result = await Election.findById(id);
  return result;
};

export const getOngoingElection = async (college: any) => {
  const result = await Election.findOne({
    college,
    status: "ongoing",
  });
  return result;
};
